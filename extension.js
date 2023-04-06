// The async modifier allows for the user of await, which converts a promise into an object, when not using await, async is not necessary.
(async function extension() {
    // The following code segment waits for platform to load before running the code, this is important to avoid errors. When using things such as Player or URI, it is necessary to add those as well.
    const { Platform } = Spicetify; 
    if (!Platform) {
      setTimeout(extension, 300);
      return;
    }
    Spicetify.showNotification("Loaded Extension");
    const user = await Spicetify.Platform.UserAPI.getUser();
    const date = new Date();
    
    if (!Spicetify.Player.isPlaying())
    {
      Spicetify.Player.play();
      Spicetify.showNotification('AutoPlaying');
    }
    Spicetify.showNotification(`Logged In As ` + user.displayName + ' @' + date.getHours() + ':' + date.getMinutes());
    
    await initTheme();
  })();

  async function initTheme()
  {
    let style = document.createElement("style");
    const main = document.querySelector(".Root__main-view");
    style.innerHTML = `
    .`
  }
  
