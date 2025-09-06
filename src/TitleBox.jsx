function TitleBox() {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="titlebox">
      {/* Flex container */}
      <div className="Intro">
        {/* Left Side */}
        <div>
          <div className="name">
            <h1><span className="back">_______</span>Hello <span className="green">.</span></h1>
            <h2><span className="orange">---------- </span>I'm Shitanshu Singh</h2>
            <h3><span className="back">_______</span>Btech Cs Ai 28</h3>
            
          </div>

          <div className="buttons">
            <div className="part1">
              <button className="butt1 liquid" onClick={() => handleClick("https://www.linkedin.com/in/shitanshu-singh-632a34306/")}>
                LinkedIn
              </button>
              <button className="butt1 liquid" onClick={() => handleClick("https://codolio.com/profile/shitanshu_1808")}>
                Codolio
              </button>
            </div>

            <div className="part2">
              <button className="butt2 liquid" onClick={() => handleClick("https://www.codechef.com/users/shitanshu_1808")}>
                CodeChef
              </button>
              <button className="butt2 liquid" onClick={() => handleClick("https://codeforces.com/profile/shitanshu_1808")}>
                Codeforces
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <img className="Image" src="./profile.png" alt="Profile Pic" />
      </div>
    </div>
  );
}

export default TitleBox;
