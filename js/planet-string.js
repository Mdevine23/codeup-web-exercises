(function(){
    "use strict";

    // var planets = [
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
    // /**
    //  * TODO:
    //  * Read each console log below, and write some javascript code to perform
    //  * the step that it describes
    //  */
    //
    // console.log('Adding "The Sun" to the beginning of the planets array.');
    // planets.unshift('Sun');
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
    // var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    // var planetsArray = planetsString.split("|");
    // console.log(planetsArray);

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

    // const planetsString = "Mercury<br>Venus<br>Earth<br>Mars<br>Jupiter<br>Saturn<br>Uranus<br>Neptune";
    // let planetArray = planetsString.split('<br>');
    // planetArray.join(", ");
    //
    // console.log(planetArray);

    const planetsString = "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune";
    const planetsArray = planetsString.split(',');

    console.log(planetsArray);
    console.log(planetsString);


})();