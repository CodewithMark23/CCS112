function Forms() {
  return (
      <>
          <div className="form-floating mb-3">
              <input
                  type="email"
                  className="form-control"
                  id="floatingInputDisabled"
                  placeholder="name@example.com"
                  disabled
              />
              <label htmlFor="floatingInputDisabled">
                  Email address
              </label>
          </div>

          <div className="form-floating mb-3">
              <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextareaDisabled"
                  disabled
              ></textarea>

              <label htmlFor="floatingTextareaDisabled">
                  Comments
              </label>
          </div>

          <div className="form-floating mb-3">
              <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2Disabled"
                  style={{ height: "100px" }}
                  disabled
              >
                  Disabled textarea with some text inside
              </textarea>

              <label htmlFor="floatingTextarea2Disabled">
                  Comments
              </label>
          </div>

          <div className="form-floating">
              <select
                  className="form-select"
                  id="floatingSelectDisabled"
                  aria-label="Floating label disabled select example"
                  disabled
              >
                  <option value="">Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
              </select>

              <label htmlFor="floatingSelectDisabled">
                  Works with selects
              </label>
          </div>
      </>
  );
}

export default Forms;