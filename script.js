/**
 * Propose Day - For Jaan 💕
 * Full of surprises, buttons & placards
 */

(function () {
  'use strict';

  const hearts = ['💕', '💖', '💗', '💓', '💝', '❤️', '🌸'];
  const confettiColors = ['#e8a0bf', '#c75d7a', '#ffb6c1', '#d4a574', '#f8d7e8'];

  const hero = document.getElementById('hero');
  const letterSection = document.getElementById('letterSection');
  const proposalSection = document.getElementById('proposalSection');
  const yesSection = document.getElementById('yesSection');
  const noSection = document.getElementById('noSection');

  const openLetterBtn = document.getElementById('openLetterBtn');
  const proposeBtn = document.getElementById('proposeBtn');
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');
  const tryAgainBtn = document.getElementById('tryAgainBtn');

  const heartsBg = document.getElementById('heartsBg');
  const floatingHearts = document.getElementById('floatingHearts');
  const confetti = document.getElementById('confetti');
  const heartBurst = document.getElementById('heartBurst');

  const surpriseOverlay = document.getElementById('surpriseOverlay');
  const surpriseClose = document.getElementById('surpriseClose');
  const surpriseText = document.getElementById('surpriseText');

  const whySection = document.getElementById('whySection');
  const whySayYesBtn = document.getElementById('whySayYesBtn');
  const hideWhyBtn = document.getElementById('hideWhyBtn');

  const whySectionInline = document.getElementById('whySectionInline');
  const whySayYesProposalBtn = document.getElementById('whySayYesProposalBtn');
  const hideWhyInlineBtn = document.getElementById('hideWhyInlineBtn');

  const nameHighlight = document.getElementById('nameHighlight');

  // ----- Surprise messages -----
  const surpriseMessages = {
    heroSurprise: "Roses are red, violets are blue… saying Yes to me is the smartest thing you’ll do. 😏💘",
    secretHint: "You’ve already stolen my heart… so I guess you should keep it.. 💖",
    nameClick: "Yes, you! You're the one I'm talking about. My Jaan. My everything. 💕",
    revealSecret: "The secret is: I fall for you a little more every day. 🤫💕",
    oneMoreReason: "Because You’re always up for meeting me, no matter the time or place… I see how it is, you just can’t resist me 😏💖",
    compliments: [
      "Jaan, you have the kind of smile that could fix a bad day. 🌸",
      "Your laugh is my favorite sound in the world. 💕",
      "You're the most beautiful person I know — inside and out. ✨",
      "Being around you feels like home, Jaan. 🏠💖",
      "You make ordinary moments feel magical. 🌟",
    ],
    proposalSurprise: "Itne to features bataye apne, still thinking... Aaa aaa Aashiqui me teri.. Jaa jaa jaayegi jaan meri...Now convinced na 😊💕",
    finalPitch: "Life with you is the only adventure I want. Say yes, Jaan? 💝",
    yesSurprise1: "I'm going to make every day feel special for you. Not just today. 🎁💕",
    yesSurprise2: "I promise to always be your safe place, just like you're mine. 🤝💕",
    noSectionSurprise: "Vo dekhiye Camera📸 Aapke saath Prank hua h..Huehue 🤣🤣 Ab fatfat Yes boldo fir padhne bhi jaana h",
    noSectionWhy: "Because you deserve someone who'll never stop choosing you. That's me. 💖 Here's to saying yes when you're ready!",
  };

  function showSurprise(message) {
    if (!surpriseText || !surpriseOverlay) return;
    surpriseText.textContent = message;
    surpriseOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function hideSurprise() {
    if (surpriseOverlay) {
      surpriseOverlay.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  surpriseClose.addEventListener('click', hideSurprise);
  surpriseOverlay.addEventListener('click', function (e) {
    if (e.target === surpriseOverlay) hideSurprise();
  });

  // ----- Background & floating hearts -----
  function createBgHearts() {
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement('span');
      heart.className = 'heart-bg';
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.left = Math.random() * 100 + '%';
      heart.style.animationDelay = Math.random() * 15 + 's';
      heart.style.animationDuration = 12 + Math.random() * 8 + 's';
      heartsBg.appendChild(heart);
    }
  }

  function createFloatingHearts() {
    for (let i = 0; i < 12; i++) {
      const h = document.createElement('span');
      h.className = 'float-heart';
      h.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      h.style.left = Math.random() * 100 + '%';
      h.style.top = Math.random() * 100 + '%';
      h.style.animationDelay = Math.random() * 4 + 's';
      h.style.animationDuration = 5 + Math.random() * 4 + 's';
      floatingHearts.appendChild(h);
    }
  }

  // ----- Show section -----
  function show(section) {
    [hero, letterSection, proposalSection, yesSection, noSection].forEach(el => el && el.classList.add('hidden'));
    if (section) section.classList.remove('hidden');
  }

  // ----- Hero -----
  openLetterBtn.addEventListener('click', function () {
    show(letterSection);
    letterSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  document.getElementById('heroSurpriseBtn').addEventListener('click', function () {
    showSurprise(surpriseMessages.heroSurprise);
  });

  document.getElementById('secretHintBtn').addEventListener('click', function () {
    showSurprise(surpriseMessages.secretHint);
  });

  if (nameHighlight) {
    nameHighlight.addEventListener('click', function () {
      showSurprise(surpriseMessages.nameClick);
    });
  }

  // ----- Letter section: Why you should say yes (placards) -----
  whySayYesBtn.addEventListener('click', function () {
    whySection.classList.toggle('hidden');
    if (!whySection.classList.contains('hidden')) {
      whySection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });

  hideWhyBtn.addEventListener('click', function () {
    whySection.classList.add('hidden');
  });

  document.getElementById('revealSecretBtn').addEventListener('click', function () {
    showSurprise(surpriseMessages.revealSecret);
  });

  document.getElementById('oneMoreReasonBtn').addEventListener('click', function () {
    showSurprise(surpriseMessages.oneMoreReason);
  });

  document.getElementById('complimentBtn').addEventListener('click', function () {
    const list = surpriseMessages.compliments;
    showSurprise(list[Math.floor(Math.random() * list.length)]);
  });

  // ----- Proposal section: Why you should say yes (inline placards) -----
  whySayYesProposalBtn.addEventListener('click', function () {
    whySectionInline.classList.toggle('hidden');
    if (!whySectionInline.classList.contains('hidden')) {
      whySectionInline.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });

  hideWhyInlineBtn.addEventListener('click', function () {
    whySectionInline.classList.add('hidden');
  });

  proposeBtn.addEventListener('click', function () {
    show(proposalSection);
    proposalSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  yesBtn.addEventListener('click', function () {
    show(yesSection);
    yesSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    spawnConfetti();
    spawnHeartBurst();
  });

  function spawnConfetti() {
    if (!confetti) return;
    for (let i = 0; i < 50; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = Math.random() * 100 + '%';
      piece.style.top = '-10px';
      piece.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
      piece.style.animationDelay = Math.random() * 0.5 + 's';
      piece.style.animationDuration = 2 + Math.random() * 2 + 's';
      confetti.appendChild(piece);
      setTimeout(() => piece.remove(), 4000);
    }
  }

  function spawnHeartBurst() {
    if (!heartBurst) return;
    heartBurst.innerHTML = '';
    const burstHearts = ['💕', '💖', '💗', '💝', '❤️'];
    for (let i = 0; i < 15; i++) {
      const span = document.createElement('span');
      span.textContent = burstHearts[Math.floor(Math.random() * burstHearts.length)];
      span.style.animationDelay = i * 0.05 + 's';
      heartBurst.appendChild(span);
    }
  }

  document.getElementById('proposalSurpriseBtn').addEventListener('click', function () {
    showSurprise(surpriseMessages.proposalSurprise);
  });

  document.getElementById('finalPitchBtn').addEventListener('click', function () {
    showSurprise(surpriseMessages.finalPitch);
  });

  // ----- No section -----
  noBtn.addEventListener('click', function () {
    show(noSection);
    noSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  tryAgainBtn.addEventListener('click', function () {
    show(proposalSection);
    proposalSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  document.getElementById('noSectionWhyBtn').addEventListener('click', function () {
    showSurprise(surpriseMessages.noSectionWhy);
  });

  document.getElementById('noSectionSurpriseBtn').addEventListener('click', function () {
    showSurprise(surpriseMessages.noSectionSurprise);
  });

  // ----- Yes section -----
  document.getElementById('yesSurprise1').addEventListener('click', function () {
    showSurprise(surpriseMessages.yesSurprise1);
  });

  document.getElementById('yesSurprise2').addEventListener('click', function () {
    showSurprise(surpriseMessages.yesSurprise2);
  });

  // ----- Init -----
  createBgHearts();
  createFloatingHearts();
})();
