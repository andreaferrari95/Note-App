function CreateArea(props) {
  return (
    <div>
      <form>
        <input type="text" placeholder="Title" name="title" id="title" />
        <p>
          <textarea
            name="content"
            id="content"
            placeholder="Take a note..."
          ></textarea>
        </p>
      </form>
    </div>
  );
}

export default CreateArea;
