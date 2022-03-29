//Lets' tell a story
const MadLibEntryForm = () => {
return `
    <div class="storyTime">
        <label for="adj">Adjective:</label>
        <input type="text" id="adj" name="adj">

        <label for="sw">Silly Word:</label>
        <input type="text" id="sw" name="sw">

        <label for="pn">Plural Noun:</label>
        <input type="text" id="pn" name="pn">

        <label for="noun">Noun:</label>
        <input type="text" id="noun" name="noun">

        <button type="button" id="tellStory">Tell My Story</button>

    </div>
`

}

export const madLibEntryWriter = () => {
    const entryPosition = document.querySelector("main")
    entryPosition.innerHTML = MadLibEntryForm();
}
