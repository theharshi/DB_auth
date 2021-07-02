import React from "react";
export const Form = () => {
  return (
    <div className="container my-10">
      <h4 className="my-3">What do you want to predict?</h4>
      <form>
        <div className="mb-3">
          <div className="dropdown my-3">
            <select name="drinks" required>
              <option value="" disabled selected hidden>
                Choose prediction attribute
              </option>
              <option value="balance">Balance</option>
              <option value="deposit">Deposits</option>
              <option value="withdrawal">Withdrawals</option>
            </select>
          </div>
          <label htmlFor="date-from" className="form-label">
            From date
          </label>
          <input type="date" className="form-control" id="date-from" />
          <label htmlFor="date-to" className="form-label">
            To date
          </label>
          <input type="date" className="form-control" id="date-to" />
        </div>
        <button type="submit" className="btn btn-primary">
          Predict
        </button>
      </form>
    </div>
  );
};
