//Exercise 1: The Game Loading Screen

function loadTextures() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Textures loaded.");
    }, 2000);
  });
}

function loadAudio() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Audio loaded.");
    }, 1000);
  });
}

function loadPhysics() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Physics engine loaded.");
    }, 1500);
  });
}

async function bootGame() {
  try {
    const [textures, audio, physics] = await Promise.all([
      loadTextures(),
      loadAudio(),
      loadPhysics(),
    ]);
    console.log(textures);
    console.log(audio);
    console.log(physics);
    console.log("All assets loaded. Game is ready to play!");
  } catch (error) {
    console.log("Failed to load game assets: " + error);
  }
}
// bootGame();

//Exercise 2- Intermediate: The Batch Fetcher (Dynamic Parallel execution)
// In the real world, you rarely hardcode three separate variables into Promise.all.
// Instead, you usually have an array of IDs, and you need to fetch data for all of them.

function fetchPost(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (postId > 0) resolve(`Post content for ID: ${postId}`);
      else reject("Invalid Post ID");
    }, 1000);
  });
}

async function loadAllPosts(idArray) {
  try {
    const promises = idArray.map((id) => fetchPost(id));
    const results = await Promise.all(promises);
    console.log("All posts downloaded:\n" + results.join("\n"));
  } catch (error) {
    console.log("Error loading posts: " + error);
  }
}
//loadAllPosts([1, 2, 3]);


//Exercise 3- Advanced: The Aggregator (Handling the "Fast-Fail" Flaw)

function getDeltaFlights() {
  return new Promise((resolve) => setTimeout(() => resolve(["Delta 101", "Delta 202"]), 1000));
}
function getUnitedFlights() {
  return new Promise((_, reject) => setTimeout(() => reject("United API is down!"), 1500));
}
function getJetBlueFlights() {
  return new Promise((resolve) => setTimeout(() => resolve(["JetBlue 55"]), 1000));
}

async function scanFlights(){
    try {
       const results = await Promise.allSettled([getDeltaFlights(), getUnitedFlights(), getJetBlueFlights()])
        const successfulFlights = results.filter(result=>result.status === "fulfilled").flatMap(result=>result.value);
        console.log("Available flights:\n" + successfulFlights.join("\n"));
        const failedFlights=results.filter(result=>result.status==="rejected").map(result=>result.reason);
        console.log("Failed to fetch flights:\n" + failedFlights.join("\n"));
    } catch (error) {
        console.log("Critical system failure:", error);
    }
}

scanFlights();