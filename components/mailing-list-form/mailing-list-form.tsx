import React, { ChangeEvent, FC, useState } from "react";
import { Box, Button, Text } from "grommet";
import { Formik, FormikHelpers } from "formik";
import * as yup from "yup";
import { TextField, CircularProgress } from "@material-ui/core";

const formSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
});

const MAILCHIMP_SIGNUP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_SIGNUP_URL;

const MailingListForm: FC<{ onSubmitSuccess: () => any }> = ({ onSubmitSuccess }) => {
  const [submissionError, setSubmissionError] = useState(false);
  const textFieldProps = {
    style: { flex: "1 1 auto" },
    variant: "outlined" as "outlined",
    required: true,
    size: "small" as "small",
  };

  const initialValues = { firstName: "", lastName: "", email: "" };

  const onSubmit = ({ email, firstName, lastName }: typeof initialValues, { setSubmitting }: FormikHelpers<typeof initialValues>) => {
    setSubmissionError(false);

    return fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, firstName, lastName }),
    })
      .then(({ ok }) => {
        if (!ok) setSubmissionError(true);
        else onSubmitSuccess();
      })
      .catch(() => setSubmissionError(true))
      .finally(() => setSubmitting(false));
  };

  return (
    <Formik initialValues={initialValues} validationSchema={formSchema} onSubmit={onSubmit}>
      {({ values, errors, touched, setFieldValue, handleBlur, handleSubmit, isSubmitting }) => {
        const maybeError = (key: keyof typeof initialValues) => (errors[key] && touched[key] ? errors[key] : undefined);
        const onChange = (key: keyof typeof initialValues) => (e: ChangeEvent<HTMLInputElement>) => setFieldValue(key, e.target.value);
        const fieldProps = (key: keyof typeof initialValues) => ({
          error: !!maybeError(key),
          helperText: maybeError(key),
          onChange: onChange(key),
          onBlur: handleBlur(key),
          value: values[key],
        });
        return isSubmitting ? (
          <Box margin="large" align="center" justify="center" children={<CircularProgress />} />
        ) : (
          <form onSubmit={handleSubmit} action={MAILCHIMP_SIGNUP_URL} method="POST">
            <input type="hidden" name="u" value={process.env.NEXT_PUBLIC_MAILCHIMP_USER} />
            <input type="hidden" name="id" value={process.env.NEXT_PUBLIC_MAILCHIMP_ID} />
            <Box>
              <Box direction="row" gap="medium" margin={{ vertical: "small" }}>
                <TextField
                  {...textFieldProps}
                  {...fieldProps("firstName")}
                  label="First name"
                  data-autocomplete="given-name"
                  name="MERGE1"
                />
                <TextField
                  {...textFieldProps}
                  {...fieldProps("lastName")}
                  label="Last name"
                  data-autocomplete="family-name"
                  name="MERGE2"
                />
              </Box>
              <Box margin={{ vertical: "small" }}>
                <TextField
                  {...textFieldProps}
                  {...fieldProps("email")}
                  name="MERGE0"
                  label="Email"
                  type="email"
                  data-autocomplete="email"
                />
              </Box>
              {submissionError && (
                <Text textAlign="center" color="neutral-4" margin={{ vertical: "small" }}>
                  Oops!, looks like something went wrong, please try again later
                </Text>
              )}
              <Box round={{ size: "6px" }} elevation="small" alignSelf="center" margin={{ top: "medium" }}>
                <Button primary label="Join" type="submit" disabled={isSubmitting} />
              </Box>
            </Box>
          </form>
        );
      }}
    </Formik>
  );
};

export default MailingListForm;
