import FirstAPI from "./FirstAPI";

const Info = function() {
  return (
    // Instructions on how to use the app
    <section className="instructions">
      <div className="wrapper">
        <h2>Instructions</h2>
        <ol>
          <li>Click on the 'Generate' button to get started.</li>
          <li>Three new article photos will appear. Please select one.</li>
          <li>After selecting the photo, a form will appear. Fill in the form with 1 noun, 1 verb, and 1 adjective.</li>
          <li>Once you submit the form, your creation will be displayed underneath, photo and headline. </li>
        </ol>

        {/* Where the code for the first API call is */}
        <FirstAPI />
      </div>
    </section>
  )
}

export default Info;