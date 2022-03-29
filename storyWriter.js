const StoryString = (adjective, sillyword, pluralnoun, noun) => {
    return `
    <div class="story">
        <p>It had been a hard, <b>${adjective}</b> day on the <b>${sillyword}</b> trail.</p>
        <p>The cowboys drove a herd of <b>${pluralnoun}</b> across the dry plains,</p>
        <p>kicking up <b>${noun}</b> along the way as they looked for somewhere to bed down.</p>
    </div>
    <button type="button" id="startOver">Start Over</button>
    `
}

export const StoryWriter = (adjective, sillyword, pluralnoun, noun) => {
    let storySpot = document.querySelector("main");
    storySpot.innerHTML = StoryString(adjective, sillyword, pluralnoun, noun)
}