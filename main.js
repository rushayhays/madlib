console.log("You look marvelous!");

//story
// It had been a hard, {adjective} day on the {silly word} trail. The cowboys drove a herd of {plural noun} across the dry plains, kicking up {noun} along the way as they looked for somewhere to bed down.
import { StoryWriter } from "./storyWriter.js";
import { madLibEntryWriter } from "./madLibEntry.js";



madLibEntryWriter();

const mainElement = document.querySelector("main");

mainElement.addEventListener("click", event => {
	if(event.target.id.startsWith("tellStory")){
		let adj = document.querySelector("#adj").value
		let sw = document.querySelector("#sw").value
		let pn = document.querySelector("#pn").value
		let noun = document.querySelector("#noun").value
		
		const madlib = {
			adjective: adj,
			sillyword: sw,
			pluralnoun: pn,
			noun: noun
		}
		//set/save to sessionStorage
		let stringyMadlib = setDataToStorage(madlib)
		sessionStorage.setItem("madKey",`${stringyMadlib}`)
		
		//invoke renderStory
		renderStory();
	}
})

const getDataFromStorage = (dataKey) => {
	//use JSON.parse()
	console.log(JSON.parse(sessionStorage.getItem(dataKey)))
	return JSON.parse(sessionStorage.getItem(dataKey))
}

const setDataToStorage = (dataObj) => {
	//use JSON.stringify()
	return JSON.stringify(dataObj)
}

const clearStorage = (dataKey) => {
	sessionStorage.removeItem(dataKey);
}

const renderInputs = () => {
	clearStorage('madlib')
	// show inputs fields

	//show 'Tell Story' button
}

const renderStory = () => {
	//get from sessionStorage
	let madObj = getDataFromStorage("madKey")
	console.log("renderStory " + madObj)

	//show the story
	StoryWriter(madObj.adjective, madObj.sillyword, madObj.pluralnoun, madObj.noun);

	//show startOver button
	//startOver will invoke renderInputs()
}

mainElement.addEventListener("click", event =>{
	if(event.target.id.startsWith("startOver")){
		renderInputs();
		madLibEntryWriter();
	}
})
renderInputs();
