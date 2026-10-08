:root {
  --bg: #06130f;
  --bg-deep: #020a08;
  --panel: rgba(12, 24, 20, 0.7);
  --panel-strong: rgba(19, 31, 27, 0.84);
  --panel-soft: rgba(17, 35, 30, 0.68);
  --line: rgba(139, 180, 167, 0.16);
  --line-strong: rgba(182, 255, 220, 0.22);
  --text: #edf7f2;
  --muted: #adc9bf;
  --muted-soft: #7ca18f;
  --green: #78dca9;
  --green-strong: #4ae0a8;
  --green-deep: #1f473d;
  --green-soft: rgba(103, 215, 164, 0.15);
  --gold: #f7d7a6;
  --violet: #bdd5ff;
  --shadow: rgba(2, 6, 6, 0.52);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Manrope", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(72, 170, 128, 0.18), transparent 30%),
    radial-gradient(circle at bottom right, rgba(94, 209, 167, 0.12), transparent 30%),
    linear-gradient(180deg, var(--bg) 0%, var(--bg-deep) 100%);
  color: var(--text);
  min-height: 100vh;
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
  border: none;
}

img {
  max-width: 100%;
  display: block;
}

.page-shell {
  position: relative;
  overflow: hidden;
  isolation: isolate;
}

.container {
  width: min(1200px, calc(100% - 40px));
  margin: 0 auto;
}

.ambient {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.65;
  pointer-events: none;
}

.ambient-one {
  width: 360px;
  height: 360px;
  background: rgba(70, 220, 155, 0.18);
  left: -60px;
  top: 120px;
  animation: floatAmbient 18s ease-in-out infinite alternate;
}

.ambient-two {
  width: 420px;
  height: 420px;
  background: rgba(96, 165, 118, 0.12);
  right: -50px;
  top: 260px;
  animation: floatAmbient 20s ease-in-out infinite alternate-reverse;
}

.network-lines {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(130, 156, 148, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(130, 156, 148, 0.04) 1px, transparent 1px);
  background-size: 160px 160px;
  mask-image: radial-gradient(circle at center, black 45%, transparent 100%);
  pointer-events: none;
}

.particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(178, 255, 220, 0.7);
  box-shadow: 0 0 8px rgba(120, 220, 169, 0.7);
  animation: drift 18s linear infinite;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(18px);
  background: rgba(6, 19, 15, 0.35);
  border-bottom: 1px solid rgba(150, 186, 170, 0.08);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 78px;
  gap: 18px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--text);
  font-weight: 800;
  letter-spacing: 0.12em;
}

.brand-mark {
  position: relative;
  width: 26px;
  height: 26px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 0 12px rgba(102, 223, 160, 0.65));
}

.brand-mark.small {
  width: 22px;
  height: 22px;
}

.lotus-core {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #d9ffe9 0%, #89e7b3 30%, #2ca56f 100%);
  box-shadow: 0 0 18px rgba(99, 216, 160, 0.8);
}

.petal {
  position: absolute;
  width: 16px;
  height: 10px;
  background: linear-gradient(180deg, rgba(157, 249, 205, 0.9), rgba(63, 176, 117, 0.8));
  border-radius: 100% 100% 100% 100% / 100% 100% 0 0;
  transform-origin: center bottom;
  box-shadow: 0 0 10px rgba(91, 214, 152, 0.25);
}

.petal-one { transform: rotate(-55deg) translateY(-8px); }
.petal-two { transform: rotate(55deg) translateY(-8px); }
.petal-three { transform: rotate(-125deg) translateY(-8px); }
.petal-four { transform: rotate(125deg) translateY(-8px); }

.brand-text {
  font-size: 0.8rem;
}

.nav-links,
.footer-links {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-links a,
.footer-links a {
  color: rgba(237, 247, 242, 0.74);
  text-decoration: none;
  font-size: 0.92rem;
  transition: color 0.25s ease;
}

.nav-links a:hover,
.footer-links a:hover {
  color: var(--text);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.primary-button,
.secondary-button,
.ghost-button,
.google-button,
.phone-button,
.call-button,
.send,
.attach {
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease;
}

.primary-button,
.secondary-button,
.ghost-button {
  min-height: 46px;
  padding: 0 22px;
  border-radius: 999px;
  font-weight: 700;
}

.primary-button {
  background: linear-gradient(135deg, rgba(120, 220, 169, 0.95), rgba(62, 174, 119, 0.9));
  color: #071b14;
  box-shadow: 0 12px 24px rgba(75, 214, 154, 0.28);
}

.secondary-button {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(170, 205, 191, 0.18);
  color: var(--text);
}

.ghost-button {
  background: transparent;
  border: 1px solid rgba(170, 205, 191, 0.18);
  color: var(--text);
}

.primary-button:hover,
.secondary-button:hover,
.ghost-button:hover,
.google-button:hover,
.phone-button:hover,
.call-button:hover,
.send:hover,
.attach:hover {
  transform: translateY(-2px);
}

.hero {
  display: grid;
  grid-template-columns: 1.02fr 1fr;
  gap: 54px;
  align-items: center;
  padding: 64px 0 52px;
}

.hero-copy {
  position: relative;
  z-index: 1;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(120, 220, 169, 0.09);
  border: 1px solid rgba(120, 220, 169, 0.2);
  color: #d7fff0;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.72rem;
  font-weight: 700;
}

.eyebrow.small {
  font-size: 0.68rem;
  letter-spacing: 0.1em;
}

.hero h1 {
  font-size: clamp(2.8rem, 5vw, 5.2rem);
  line-height: 0.96;
  letter-spacing: -0.06em;
  margin: 18px 0 18px;
  max-width: 640px;
}

.hero p {
  font-size: 1.08rem;
  line-height: 1.8;
  color: var(--muted);
  max-width: 610px;
  margin-bottom: 28px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
  margin-bottom: 28px;
}

.large {
  min-height: 52px;
  padding-left: 26px;
  padding-right: 26px;
}

.sign-in-panel {
  width: min(560px, 100%);
  padding: 18px 18px 8px;
  border-radius: 24px;
  background: rgba(15, 26, 22, 0.56);
  border: 1px solid rgba(170, 205, 191, 0.12);
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.22);
}

.divider {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
  font-size: 0.73rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(237, 247, 242, 0.56);
}

.divider::before,
.divider::after {
  content: "";
  height: 1px;
  background: rgba(170, 205, 191, 0.12);
  flex: 1;
}

.signin-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.8fr;
  gap: 12px;
}

.google-button,
.phone-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 52px;
  padding: 0 18px;
  border-radius: 14px;
  font-weight: 700;
}

.google-button {
  background: linear-gradient(180deg, rgba(18, 35, 30, 0.96), rgba(8, 18, 15, 0.96));
  border: 1px solid rgba(170, 205, 191, 0.18);
  color: var(--text);
}

.phone-button {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(170, 205, 191, 0.14);
  color: var(--text);
}

.google-icon {
  width: 18px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.google-icon svg {
  width: 18px;
  height: 18px;
}

.phone-icon {
  display: inline-flex;
  width: 18px;
  height: 18px;
  align-items: center;
  justify-content: center;
  color: var(--green);
  font-size: 1.2rem;
  border-radius: 50%;
  background: rgba(120, 220, 169, 0.08);
}

.hero-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 650px;
}

.glass-panel {
  background: linear-gradient(180deg, rgba(18, 33, 29, 0.82), rgba(9, 16, 14, 0.8));
  border: 1px solid rgba(170, 205, 191, 0.14);
  box-shadow: 0 26px 68px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(14px);
}

.app-window {
  position: relative;
  width: min(100%, 560px);
  border-radius: 32px;
  padding: 14px;
  z-index: 2;
}

.window-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 6px 10px 14px;
}

.window-dots {
  display: flex;
  gap: 8px;
}

.window-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.window-dots span:nth-child(1) { background: #ff7f6d; }
.window-dots span:nth-child(2) { background: #f9cb52; }
.window-dots span:nth-child(3) { background: #62dd5d; }

.window-title {
  font-weight: 700;
  letter-spacing: 0.04em;
  font-size: 0.76rem;
  color: rgba(237, 247, 242, 0.7);
  text-transform: uppercase;
}

.status-pill {
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  border: 1px solid rgba(120, 220, 169, 0.2);
  background: rgba(120, 220, 169, 0.08);
  color: #d1ffeb;
}

.app-body {
  display: grid;
  grid-template-columns: 210px 1fr;
  background: rgba(5, 13, 11, 0.76);
  border: 1px solid rgba(170, 205, 191, 0.12);
  border-radius: 24px;
  overflow: hidden;
  min-height: 560px;
}

.chat-list {
  padding: 18px 12px 12px;
  background: rgba(12, 20, 17, 0.8);
  border-right: 1px solid rgba(170, 205, 191, 0.08);
}

.chat-item {
  display: flex;
  gap: 12px;
  padding: 12px 10px;
  margin-bottom: 8px;
  border-radius: 16px;
  transition: transform 0.25s ease, background 0.25s ease;
}

.chat-item:hover {
  transform: translateX(2px);
  background: rgba(255, 255, 255, 0.02);
}

.chat-item.active {
  background: linear-gradient(90deg, rgba(120, 220, 169, 0.12), rgba(255, 255, 255, 0.01));
  border: 1px solid rgba(120, 220, 169, 0.16);
}

.avatar {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.76rem;
  font-weight: 800;
  color: #071a13;
}

.avatar-green { background: linear-gradient(135deg, #ddffe8, #8fe7b9); }
.avatar-sunset { background: linear-gradient(135deg, #ffc7a9, #ff9a6d); }
.avatar-sage { background: linear-gradient(135deg, #d2f0d8, #8bb0a8); }
.avatar.large {
  width: 42px;
  height: 42px;
}

.chat-meta {
  flex: 1;
  min-width: 0;
}

.name-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
  font-size: 0.78rem;
}

.chat-item small,
.profile-block span,
.message-row {
  color: rgba(237, 247, 242, 0.66);
}

.conversation-panel {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.conversation-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 18px 18px 14px;
  border-bottom: 1px solid rgba(170, 205, 191, 0.08);
}

.profile-block {
  display: flex;
  align-items: center;
  gap: 12px;
}

.profile-block h3 {
  margin: 0;
  font-size: 0.96rem;
}

.profile-block span {
  font-size: 0.72rem;
}

.call-button {
  min-height: 34px;
  padding: 0 12px;
  border-radius: 999px;
  color: var(--text);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(170, 205, 191, 0.12);
}

.message-thread {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;
  padding: 20px 18px 14px;
}

.message-row {
  display: flex;
}

.message-row.outgoing {
  justify-content: flex-end;
}

.bubble {
  max-width: 74%;
  padding: 12px 14px;
  border-radius: 18px;
  line-height: 1.5;
  font-size: 0.85rem;
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.12);
}

.message-row.incoming .bubble {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(170, 205, 191, 0.12);
  color: var(--text);
  border-bottom-left-radius: 8px;
}

.message-row.outgoing .bubble {
  background: linear-gradient(135deg, rgba(113, 205, 161, 0.9), rgba(89, 179, 136, 0.86));
  color: #0a1c17;
  border-bottom-right-radius: 8px;
  font-weight: 600;
}

.media-card {
  width: min(220px, 100%);
  border-radius: 18px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(170, 205, 191, 0.12);
}

.media-thumb {
  height: 116px;
  background:
    linear-gradient(135deg, rgba(102, 223, 160, 0.14), rgba(136, 103, 180, 0.2)),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='116' viewBox='0 0 220 116'%3E%3Cg fill='none'%3E%3Crect width='220' height='116' fill='%230d211d'/%3E%3Cpath d='M0 88C34 70 57 58 83 60C100 61 115 76 131 76C157 76 156 35 185 35C201 35 214 42 220 48V116H0V88Z' fill='%2354c68b' fill-opacity='0.8'/%3E%3Cpath d='M0 100C21 85 45 76 67 77C89 78 105 90 125 91C146 92 165 80 185 80C197 80 208 82 220 88V116H0V100Z' fill='%23182d29' fill-opacity='0.8'/%3E%3Ccircle cx='54' cy='33' r='17' fill='%23f6d6a4' fill-opacity='0.8'/%3E%3C/g%3E%3C/svg%3E") center/cover no-repeat;
}

.media-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px 12px 12px;
}

.media-meta strong {
  font-size: 0.84rem;
}

.media-meta span {
  color: rgba(237, 247, 242, 0.6);
  font-size: 0.7rem;
}

.typing-indicator {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 18px 10px;
}

.typing-indicator span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(175, 224, 209, 0.9);
  animation: blink 1.2s infinite ease-in-out;
}

.typing-indicator span:nth-child(2) { animation-delay: 0.15s; }
.typing-indicator span:nth-child(3) { animation-delay: 0.3s; }

.composer {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px 14px;
  border-top: 1px solid rgba(170, 205, 191, 0.08);
}

.attach,
.send {
  border-radius: 12px;
  min-height: 38px;
}

.attach {
  width: 38px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(170, 205, 191, 0.12);
  color: var(--text);
}

.composer input {
  flex: 1;
  min-height: 38px;
  border: 1px solid rgba(170, 205, 191, 0.1);
  background: rgba(255, 255, 255, 0.02);
  color: rgba(237, 247, 242, 0.7);
  border-radius: 12px;
  padding: 0 12px;
}

.send {
  padding: 0 16px;
  background: linear-gradient(135deg, rgba(121, 220, 169, 0.9), rgba(70, 210, 148, 0.88));
  color: #061b16;
  font-weight: 800;
}

.floating-card {
  position: absolute;
  padding: 16px 18px;
  border-radius: 18px;
  z-index: 3;
}

.card-one {
  left: 18px;
  bottom: 40px;
  min-width: 178px;
  transform: rotate(-8deg);
}

.card-two {
  right: 6px;
  top: 66px;
  min-width: 170px;
  transform: rotate(8deg);
}

.mini-label {
  display: block;
  color: rgba(237, 247, 242, 0.68);
  font-size: 0.64rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.card-one strong {
  display: block;
  margin-bottom: 12px;
  font-size: 1.04rem;
}

.avatar-stack {
  display: flex;
  align-items: center;
}

.mini-avatar {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.68rem;
  font-weight: 800;
  color: #071a13;
  border: 2px solid rgba(6, 19, 15, 0.7);
  margin-left: -6px;
}

.mini-avatar:first-child { margin-left: 0; }
.a1 { background: linear-gradient(135deg, #d5ffd9, #aee7be); }
.a2 { background: linear-gradient(135deg, #ffc7b3, #ff9d7d); }
.a3 { background: linear-gradient(135deg, #d5e9ff, #a8b3ff); }

.pulse-ring {
  width: 38px;
  height: 38px;
  display: inline-flex;
  border-radius: 50%;
  border: 1px solid rgba(120, 220, 169, 0.4);
  background: rgba(120, 220, 169, 0.08);
  box-shadow: 0 0 0 12px rgba(120, 220, 169, 0.05);
  margin-bottom: 12px;
  animation: pulse 2.8s infinite ease-out;
}

.mini-status {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.78rem;
}

.dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #6de7b1;
  box-shadow: 0 0 12px rgba(109, 231, 177, 0.7);
}

.features,
.experience,
.security {
  padding-top: 42px;
  padding-bottom: 42px;
}

.section-heading {
  text-align: center;
  margin-bottom: 26px;
}

.section-heading h2,
.experience-copy h2,
.banner-copy h2 {
  margin: 12px auto 0;
  font-size: clamp(2.1rem, 3vw, 3.1rem);
  letter-spacing: -0.06em;
  line-height: 1.01;
  max-width: 720px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.feature-card {
  padding: 28px 22px;
  border-radius: 26px;
  min-height: 220px;
}

.icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(120, 220, 169, 0.18), rgba(162, 184, 255, 0.1));
  color: #dffef0;
  font-size: 1.5rem;
  margin-bottom: 18px;
  box-shadow: inset 0 0 0 1px rgba(160, 205, 184, 0.1);
}

.feature-card h3 {
  margin: 0 0 12px;
  font-size: 1.28rem;
}

.feature-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.experience {
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  gap: 30px;
  align-items: center;
}

.experience-copy {
  padding-right: 12px;
}

.experience-copy p {
  color: var(--muted);
  line-height: 1.9;
  margin-top: 18px;
  max-width: 540px;
}

.experience-copy ul {
  list-style: none;
  padding: 0;
  margin: 26px 0 0;
  display: grid;
  gap: 14px;
}

.experience-copy li {
  position: relative;
  padding-left: 28px;
  color: #e6f5ee;
  font-weight: 600;
}

.experience-copy li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 7px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(135deg, #a8f5c9, #4ad49c);
  box-shadow: 0 0 16px rgba(120, 220, 169, 0.45);
}

.experience-panel {
  border-radius: 30px;
  padding: 22px;
}

.panel-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 24px;
}

.live-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(120, 220, 169, 0.08);
  border: 1px solid rgba(120, 220, 169, 0.2);
  color: #d9fff1;
  font-size: 0.76rem;
  font-weight: 700;
}

.signal-bars {
  color: rgba(237, 247, 242, 0.8);
  letter-spacing: 0.12em;
  font-size: 1.2rem;
}

.mini-activity {
  display: grid;
  gap: 16px;
}

.activity-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 14px;
  border: 1px solid rgba(170, 205, 191, 0.1);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.02);
}

.activity-icon {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
}

.activity-icon.green { background: rgba(120, 220, 169, 0.12); color: #d9fff4; }
.activity-icon.gold { background: rgba(247, 215, 166, 0.12); color: #fde8bd; }
.activity-icon.violet { background: rgba(189, 213, 255, 0.14); color: #e7edff; }

.activity-item strong {
  display: block;
  margin-bottom: 4px;
}

.activity-item small {
  color: rgba(237, 247, 242, 0.62);
}

.security-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  border-radius: 30px;
  padding: clamp(22px, 3vw, 34px);
}

.banner-copy {
  flex: 1;
}

.banner-copy h2 {
  max-width: 560px;
  margin-left: 0;
}

.banner-pills {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 10px;
}

.banner-pills span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(170, 205, 191, 0.12);
  color: #dffcf0;
  font-size: 0.8rem;
  font-weight: 600;
}

.site-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 26px 0 40px;
  border-top: 1px solid rgba(170, 205, 191, 0.08);
}

@keyframes drift {
  0% { transform: translate3d(0, 0, 0) scale(0.7); opacity: 0; }
  10% { opacity: 1; }
  100% { transform: translate3d(28px, -120px, 0) scale(1.2); opacity: 0; }
}

@keyframes blink {
  0%, 80%, 100% { opacity: 0.25; transform: translateY(0); }
  40% { opacity: 1; transform: translateY(-2px); }
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(120, 220, 169, 0.35); }
  70% { box-shadow: 0 0 0 20px rgba(120, 220, 169, 0.02); }
  100% { box-shadow: 0 0 0 0 rgba(120, 220, 169, 0); }
}

@keyframes floatAmbient {
  0% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(26px, 18px, 0) scale(1.08); }
  100% { transform: translate3d(-16px, 36px, 0) scale(1.14); }
}

@media (max-width: 980px) {
  .hero {
    grid-template-columns: 1fr;
    padding-top: 48px;
  }

  .hero-visual {
    min-height: 580px;
  }

  .feature-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .experience {
    grid-template-columns: 1fr;
  }

  .security-banner {
    flex-direction: column;
    align-items: flex-start;
  }

  .banner-pills {
    justify-content: flex-start;
  }
}

@media (max-width: 760px) {
  .nav {
    flex-wrap: wrap;
    justify-content: center;
    padding: 14px 0;
    min-height: auto;
  }

  .nav-links {
    order: 3;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  .nav-actions {
    width: 100%;
    justify-content: center;
  }

  .signin-grid {
    grid-template-columns: 1fr;
  }

  .app-body {
    grid-template-columns: 1fr;
  }

  .chat-list {
    border-right: none;
    border-bottom: 1px solid rgba(170, 205, 191, 0.08);
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .site-footer {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 540px) {
  .container {
    width: min(100% - 24px, 1200px);
  }

  .hero h1 {
    font-size: 2.55rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .primary-button,
  .secondary-button,
  .ghost-button {
    width: 100%;
  }

  .app-window {
    padding: 10px;
    border-radius: 22px;
  }

  .conversation-header {
    padding: 14px 12px 10px;
  }

  .message-thread {
    padding: 16px 12px;
  }

  .composer {
    padding-inline: 10px;
  }

  .card-one,
  .card-two {
    display: none;
  }
}
