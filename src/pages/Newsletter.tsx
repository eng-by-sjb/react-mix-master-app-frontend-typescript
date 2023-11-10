import { Form, useNavigation } from "react-router-dom";

const Newsletter = () => {
  const navigate = useNavigation();

  const isSubmitting = navigate.state === "submitting";

  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>Our Newsletter</h4>

      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          required
          defaultValue="steve"
        />
      </div>

      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last name
        </label>

        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          required
          defaultValue="tommy"
        />
      </div>

      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>

        <input
          type="text"
          className="form-input"
          name="email"
          id="email"
          required
          defaultValue="test@test.com"
        />

        <button
          className="btn btn-block"
          type="submit"
          style={{ marginTop: "0.5rem" }}
          disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </Form>
  );
};
export default Newsletter;
