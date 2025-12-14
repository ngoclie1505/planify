import { useState } from "react";

export default function Profile() {
  // =======================
  // STATE MANAGEMENT
  // =======================

  // Track follow / unfollow state
  const [isFollowed, setIsFollowed] = useState(false);

  // Number of followers (changes when follow button is clicked)
  const [followers, setFollowers] = useState(5); // default shown in picture

  // Static numbers (UI only for now)
  const [following] = useState(15);
  const [plans] = useState(10);

  // Track which tab is currently active
  const [activeTab, setActiveTab] = useState("plans");

  // =======================
  // EVENT HANDLERS
  // =======================

  // Handle follow / unfollow logic
  const toggleFollow = () => {
    // If user is not followed yet → increase followers
    if (!isFollowed) setFollowers(followers + 1);
    // If already followed → decrease followers
    else setFollowers(followers - 1);

    // Toggle follow state
    setIsFollowed(!isFollowed);
  };

  return (
    // =======================
    // MAIN PAGE CONTAINER
    // =======================
    <div
      style={{
        marginTop: "80px",   // push content below header
        marginLeft: "80px",  // leave space for left sidebar
        padding: "20px",
      }}
    >

      {/* =======================
          TOP PROFILE SECTION
          ======================= */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between", // left info | right button
          alignItems: "center",
          padding: "20px",
          borderBottom: "2px solid #0c4a6e",
        }}
      >
        {/* ---------- LEFT SIDE: AVATAR + USER INFO ---------- */}
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>

          {/* Avatar placeholder */}
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "12px",
              border: "3px solid #0c4a6e",
              background: "#e5e7eb",
            }}
          ></div>

          {/* Username and statistics */}
          <div>
            <h2 style={{ margin: 0 }}>Choi1505</h2>

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "5px",
                color: "#333",
              }}
            >
              <span>{following} followings</span>
              <span>• {followers} followers</span>
              <span>• {plans} plans</span>
            </div>
          </div>
        </div>

        {/* ---------- RIGHT SIDE: FOLLOW BUTTON ---------- */}
        <button
          onClick={toggleFollow}
          style={{
            padding: "8px 18px",
            borderRadius: "20px",
            border: "2px solid #0c4a6e",
            background: isFollowed ? "#0c4a6e" : "white",
            color: isFollowed ? "white" : "#0c4a6e",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          {isFollowed ? "Followed" : "+ Follow"}
        </button>
      </div>

      {/* =======================
          BOTTOM SECTION
          ======================= */}
      <div style={{ display: "flex", marginTop: "20px", gap: "20px" }}>

        {/* ---------- LEFT: BIO CARD ---------- */}
        <div
          style={{
            width: "30%",
            background: "#e5e7eb",
            borderRadius: "15px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h3>About me</h3>
          <p style={{ marginTop: "20px", fontStyle: "italic" }}>
            "This is bio"
          </p>
        </div>

        {/* ---------- RIGHT: TABS + TAB CONTENT ---------- */}
        <div
          style={{
            width: "70%",
            background: "#e5e7eb",
            borderRadius: "15px",
            padding: "20px",
          }}
        >
          {/* ----- TAB BUTTONS ----- */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "20px",
              borderBottom: "2px solid #0c4a6e",
              paddingBottom: "10px",
            }}
          >
            {["plans", "liked", "followings", "followers"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)} // change active tab
                style={{
                  background: "none",
                  border: "none",
                  fontWeight: activeTab === tab ? 700 : 500,
                  color: activeTab === tab ? "#0c4a6e" : "#555",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* ----- TAB CONTENT (CONDITIONAL RENDERING) ----- */}
          <div style={{ textAlign: "center", padding: "20px" }}>
            {activeTab === "plans" && <p>Plans content here…</p>}
            {activeTab === "liked" && <p>Liked content here…</p>}
            {activeTab === "followings" && <p>Followings content here…</p>}
            {activeTab === "followers" && <p>Followers content here…</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
