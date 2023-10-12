(function(){
    "use strict";

    // let planets = [
    //     'Mercury',
    //     'Venus',
    //     'Earth',
    //     'Mars',
    //     'Jupiter',
    //     'Saturn',
    //     'Uranus',
    //     'Neptune'
    // ];
    //
    // console.log("Planets before we start =>", planets);
    //
    // // /**
    // //  * TODO:
    // //  * Read each console log below, and write some javascript code to perform
    // //  * the step that it describes
    // //  */
    //
    // console.log('Adding "The Sun" to the beginning of the planets array.');
    // planets.unshift('The Sun');
    // console.log(planets);
    //
    // console.log('Adding "Pluto" to the end of the planets array.');
    // planets.push('Pluto');
    // console.log(planets);
    //
    // console.log('Removing "The Sun" from the beginning of the planets array.');
    // planets.shift();
    // console.log(planets);
    //
    // console.log('Removing "Pluto" from the end of the planets array.');
    // planets.pop();
    // console.log(planets);
    //
    // console.log('Finding and logging the index of "Earth" in the planets array.');
    // let earthIndex = planets.indexOf("Earth");
    // console.log(earthIndex);
    //
    // console.log("Reversing the order of the planets array.");
    // planets.reverse();
    // console.log(planets);
    //
    // console.log("Sorting the planets array.");
    // planets.sort();
    // console.log(planets);



    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    const planetsBreak = planetsArray.join('<br>');
    console.log(planetsBreak);

    let planetsHtml = planetsArray.join('</li><li>');
    console.log(planetsHtml);
    planetsHtml = `<ul><li>${planetsHtml}</li></ul>`;
    console.log(planetsHtml);

})();