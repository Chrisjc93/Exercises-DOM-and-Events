function init() {
  const missionAbort = document.getElementById("abortMission");
  const button = document.getElementById("liftoffButton");
  const paragraph = document.getElementById("statusReport");

  // Put your code for the exercises here.
  function changeText() {
    paragraph.innerHTML = "Houston, we have liftoff!";
  }

  // button.addEventListener('click', changeText);
  // can also use an anon function:
  button.addEventListener('click', event => {
    paragraph.innerHTML = 'Houston! We have liftoff!';
  });

  missionAbort.addEventListener('mouseover', function (event) {
    event.target.style.backgroundColor = "red";
  });

  missionAbort.addEventListener('mouseout', function (event) {
    event.target.style.backgroundColor = "";
  });

  missionAbort.addEventListener('click', function (event) {
    let answer = window.confirm("Are you sure you want to abort the mission?");
    if (answer === true) {
      paragraph.innerHTML = "Mission aborted! Space shuttle returning home.";
    }
  })

}

window.addEventListener("load", init);