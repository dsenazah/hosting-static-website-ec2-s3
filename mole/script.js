// SCENES
// - CUBE
// -- CUBE FALL
// --- CUBE FALL EFFECTS
var effects = {
  init: function (proto) {
    // set prototype to cube object
    this.proto = proto;
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
  },
  vars: function () {
    this.burstOption = {
      parent: this.cubeSceneEl,
      x: '100%', y: 100,
      shiftX: { 0: 300 },
      shiftY: { 0: '-50' },
      type: ['circle', 'rect', 'polygon'],
      fill: ['white', 'yellow', 'pink'],
      delay: (this.delay + 265) * this.s,
      duration: 1400 * this.s,
      radius: { 50: 150 },
      degree: 200,
      count: 5,
      angle: { 0: '-25' },
      easing: 'expo.out',
      isSwirl: true,
      randomRadius: .7,
      randomAngle: .1,
      swirlFrequency: 5,
      isRunLess: true,
      opacity: .75 };

  },

  createTween: function () {
    this.cubeMainTween.add([this.createFall1(), this.createFall2(),
    this.createFall3(), this.createFall4(),
    this.createFall5()]);

  },
  createFall1: function () {
    if (this.isMobile()) {return new mojs.Timeline();}
    var timeline = new mojs.Timeline();
    var burst2Option = {
      x: '-20%', shiftX: { 0: -300 },
      angle: { 0: '25' },
      onStart: () => {this.isSound && this.fall1Sound.play();} };

    mojs.h.extend(burst2Option, this.burstOption);
    var burst1 = new mojs.Burst(this.burstOption),
    burst2 = new mojs.Burst(burst2Option);
    timeline.add(burst1, burst2);
    return timeline;
  },
  createFall2: function () {
    if (this.isMobile()) {return new mojs.Timeline();}
    var timeline = new mojs.Timeline();
    var burst1Option = { delay: (this.delay + 850) * this.s, radius: { 30: 60 }, count: 3 };
    var burst2Option = {
      x: '-20%', shiftX: { 0: -300 }, angle: { 0: '25' },
      onStart: () => {this.isSound && this.fall2Sound.play();} };


    mojs.h.extend(burst1Option, this.burstOption);
    mojs.h.extend(burst2Option, burst1Option);
    var burst1 = new mojs.Burst(burst1Option),
    burst2 = new mojs.Burst(burst2Option);
    timeline.add(burst1, burst2);
    return timeline;
  },
  createFall3: function () {
    if (this.isMobile()) {return new mojs.Timeline();}
    var timeline = new mojs.Timeline();
    var burst1Option = { delay: (this.delay + 1275) * this.s, radius: { 15: 30 }, count: 2, shiftX: { 0: 150 }, shiftY: { 0: '-25' } };
    var burst2Option = {
      x: '-20%', shiftX: { 0: -150 }, angle: { 0: '25' },
      onStart: () => {this.isSound && this.fall3Sound.play();} };


    mojs.h.extend(burst1Option, this.burstOption);
    mojs.h.extend(burst2Option, burst1Option);
    var burst1 = new mojs.Burst(burst1Option),
    burst2 = new mojs.Burst(burst2Option);
    timeline.add(burst1, burst2);
    return timeline;
  },
  createFall4: function () {
    if (this.isMobile()) {return new mojs.Timeline();}
    var timeline = new mojs.Timeline();
    var burst1Option = { delay: (this.delay + 1550) * this.s, radius: { 5: 12 }, count: 1, shiftX: { 0: 80 }, shiftY: { 0: '-15' } };
    var burst2Option = {
      x: '-20%', shiftX: { 0: -80 }, angle: { 0: '15' },
      onStart: () => {this.isSound && this.fall4Sound.play();} };


    mojs.h.extend(burst1Option, this.burstOption);
    mojs.h.extend(burst2Option, burst1Option);
    var burst1 = new mojs.Burst(burst1Option),
    burst2 = new mojs.Burst(burst2Option);
    timeline.add(burst1, burst2);
    return timeline;
  },
  createFall5: function () {
    if (this.isMobile()) {return new mojs.Timeline();}
    var timeline = new mojs.Timeline();
    var burst1Option = { delay: (this.delay + 1725) * this.s, radius: { 5: 12 }, count: 1, shiftX: { 0: 60 }, shiftY: { 0: '-10' }, childOptions: { radius: { 3: 0 } } };
    var burst2Option = {
      x: '-20%', shiftX: { 0: -60 }, angle: { 0: '10' },
      onStart: () => {this.isSound && this.fall5Sound.play();} };


    mojs.h.extend(burst1Option, this.burstOption);
    mojs.h.extend(burst2Option, burst1Option);
    var burst1 = new mojs.Burst(burst1Option),
    burst2 = new mojs.Burst(burst2Option);
    timeline.add(burst1, burst2);
    return timeline;
  } };


var cubeFall = {
  init: function (proto) {
    // set prototype to cube object
    this.proto = proto;
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
    effects.init(this);
  },
  vars: function () {
    this.bouncyEasing = mojs.easing.path('M0,100 C4.00577744,92.3519448 8.46993511,63.9895504 13.1512887,0.0901667719 L21.3497674,0 C21.3497674,-1.77229627 30.0509472,116.705669 42.9949846,0 L48.1345723,0 C48.1345723,-0.774700647 55,56.7834546 63.0607938,0 L66.17434,0 C66.17434,-0.960124778 70.5072591,29.23993 76.7835754,0 L78.6555388,0 C78.6555388,0.000360393587 81.8632425,16.4914595 86.0928122,0 L87.2894428,0 C87.2894428,-0.761743229 89.7692184,9.63462033 92.2144672,0 L93.1382971,0 C93.1382971,-0.227841855 94.7579743,4.40567189 96.9144218,0 L97.5682773,0 C97.5682773,-0.227841855 98.9774879,1.86613741 100,0', { precompute: 5500, eps: .00001 });
    this.scaleEasing = mojs.easing.path('M0,0 C4.00577744,7.64805524 8.46993511,36.0104496 13.1512887,99.9098332 L21.3497674,100 C21.3497674,101.772296 30.5883328,-15.0576272 42.9949846,100 L48.1345723,100 C48.1345723,100.774701 54.5357691,43.5875572 63.0607938,100 L66.17434,100 C66.17434,100.960125 70.5072591,70.76007 76.7835754,100 L78.6555388,100 C78.6555388,99.9996396 81.8632425,83.5085405 86.0928122,100 L87.2894428,100 C87.2894428,100.761743 89.1622181,90.3428525 92.2144672,100 L93.1382971,100 C93.1382971,100.227842 94.7579743,95.5943281 96.9144218,100 L97.5682773,100 C97.5682773,100.227842 98.9774879,98.1338626 100,100', { precompute: 5500, eps: .00001 });
    this.squashEasing = mojs.easing.path('M0,100 C0,100 4.50292969,98.5458979 13.1655083,129.599609 C13.1655083,125.550292 14.5922587,111.423982 14.9775391,100 C18.3436489,0.118817967 21.3763133,100 21.3763133,100 C21.3763133,100 24.1020114,143.589313 31.182035,100.498105 C31.328125,99.3914616 32.96875,99.9925683 32.96875,99.9925683 C32.96875,99.9925683 37.7038574,101.822997 43.1033936,119.37915 C43.4711914,114.650634 44.145598,101.943658 44.3303223,99.9925683 C46.303074,64.0298992 48.1256605,100 48.1256605,100 C48.1199951,99.9868613 49.9071233,128.571455 54.5492038,100.31832 C54.644989,99.5927399 55.7206794,99.9868608 55.7206794,99.9868608 C55.7206794,99.9868608 59.6297405,101.239014 63.1699944,112.749862 C63.4111443,109.649569 64.0730787,101.271818 64.1941948,99.9925683 C65.7125677,79.1142212 66.3750221,100 66.3750221,100 C66.3750221,100 75.6449112,100 76.9499613,100 C77.9891495,90.3360533 78.7952818,100 78.7952818,100 C78.7952818,100 85.3866104,100 86.163329,100 C86.7355255,95.6422743 87.4229688,100 87.4229688,100 C87.4229688,100 91.4811997,100 92.0937284,100 C92.6703705,97.8777651 93.2507552,100 93.2507552,100 C93.2507552,100 96.5008682,100 97.0045401,100 C97.4574799,98.8978552 97.8392386,100 97.8392386,100 L100,100', { precompute: 5500, eps: .00001 });
  },
  createTween: function () {
    // var tween = new mojs.Timeline;
    this.cubeFallTween = new mojs.Tween({
      duration: this.fallDuration * this.s,
      delay: this.delay * this.s,
      onStart: () => {this.cubeEl.style.opacity = 1;},
      onUpdate: progress => {
        var bounceProgress = this.bouncyEasing(progress),
        scaleProgress = this.scaleEasing(progress),
        squashProgress = this.squashEasing(progress);

        mojs.h.setPrefixedStyle(this.cubeEl, 'transform', `translate3d(0, ${-this.translateY + this.translateY * bounceProgress}px, 0)`);
        mojs.h.setPrefixedStyle(this.cubeSquashEl, 'transform', `scaleX(${1 + squashProgress}) scaleY(${1 - squashProgress})`);
        mojs.h.setPrefixedStyle(this.shadowEl, 'transform', `scale(${1 + scaleProgress + squashProgress}) rotateX(${-28 * squashProgress}deg) rotateY(${28 * squashProgress}deg) translateZ(${-4 * squashProgress}px)`);
        this.shadowEl.style.opacity = Math.max(bounceProgress / 2, .1);
      } });

    this.cubeMainTween.add(this.cubeFallTween);
  }


  // -- CUBE ANTICIPATION
};var cubeAnticipation = {
  init: function (proto) {
    this.proto = proto;
    // set prototype to cube object
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
  },
  vars: function () {
    this.anticipationEasing = mojs.easing.path('M0,0 C0,0 17.1742287,-107.268176 19.3167114,-0.633646433 C19.3167114,55.7683836 100,100 100,100');
    this.anticipatingYEasing = mojs.easing.path('M0,100 C4.21746922,99.7372437 14.4689363,99.8708599 19.3294067,99.8708626 C26.5066376,7.56216386 46.8866348,19.6362701 46.8866348,19.6362701 L100,19.6362701');
  },
  createTween: function () {
    this.cubeAnticipationTween = new mojs.Tween({
      delay: (this.fallDuration + 200) * this.s,
      duration: 1 * this.fallDuration * this.s,
      // onComplete: ()=> { mojs.h.style(this.cubeEl, 'transform', ''); },
      onUpdate: p => {
        var anticipationProgress = this.anticipationEasing(p),
        anticipationYProgress = 1 - this.anticipatingYEasing(p);
        mojs.h.style(this.cubeEl, 'transform', `translate3d(0, ${-this.translateY * (1 - anticipationYProgress)}px, 0)`);

        var nAnticipationProgress = 1 + (1 - anticipationProgress);
        mojs.h.style(this.cubeSquashEl, 'transform', `scaleX(${anticipationProgress}) scaleY(${nAnticipationProgress})`);

        if (anticipationProgress > 1) {
          var scale = anticipationProgress,rotateX = 1 - anticipationProgress;
        } else {
          var scale = nAnticipationProgress,rotateX = .2 * mojs.easing.cubic.out(p);
        }
        mojs.h.style(this.shadowEl, 'transform', `scale(${scale})
                                  translateX(${-.5 * anticipationProgress}px)
                                  translateY(${-.5 * anticipationProgress}px)
                                  rotateX(${30 * rotateX}deg)
                                  rotateY(${-30 * rotateX}deg)`);


        this.shadowEl.style.opacity = anticipationYProgress / 2 - .3 * (1 - anticipationProgress);
      } });

    this.cubeMainTween.add(this.cubeAnticipationTween);
  } };


var cube = {
  init: function (proto) {
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
    this.initChildScenes();
    // this.cubeMainTween.start();
  },
  vars: function () {
    this.cubeEl = document.querySelector('#js-cube');
    this.cubeSquashEl = document.querySelector('#js-cube-squash');
    this.shadowEl = document.querySelector('#js-shadow');
    this.cubeSceneEl = document.querySelector('#js-cube-scene');
    this.translateY = window.innerHeight;
    this.fallDuration = 2000;
    this.delay = 0;

    window.addEventListener('resize', () => {this.translateY = window.innerHeight;});
  },
  createTween: function () {this.cubeMainTween = new mojs.Timeline();},

  initChildScenes: function () {
    cubeFall.init(this);
    cubeAnticipation.init(this);
    this.mainTween.add(this.cubeMainTween);
  }

  // - MOLE
  // -- MOLE DOOR OPEN
};var doorOpen = {
  init: function (proto) {
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
    // this.cubeMainTween.start();
  },
  vars: function () {
  },
  createTween: function () {
    var tween = new mojs.Tween({
      duration: 1000 * this.s,
      delay: this.delay * this.s,
      onStart: () => {
        this.isSound && this.doorOpenSound.play();
      },
      onUpdate: p => {
        // return;
        var bounce = mojs.easing.bounce.out(p);
        var pp = mojs.easing.cubic.out(mojs.easing.cubic.out(p));
        mojs.h.setPrefixedStyle(this.doorEl, 'transform', `rotateY(${-125 * bounce}deg) translateX(${8 * (1 - pp)}px) translateY(${8 * (1 - pp)}px) scaleX(${1 - .25 * bounce})`);

        var shadowBounce = mojs.easing.cubic.in(bounce);
        mojs.h.setPrefixedStyle(this.doorShadowEl, 'transform', `scaleX(${shadowBounce}) translateZ(0)`);
        this.doorShadowEl.style.opacity = shadowBounce;

        mojs.h.setPrefixedStyle(this.doorHandleShadowEl, 'transform', `rotateZ(${-75 * (1 - bounce)}deg) scaleY(${bounce}) translateZ(0)`);
        this.doorHandleShadowEl.style.opacity = bounce;

      } });

    this.moleTimeline.add(tween);

  }

  // -- MOLE OPEN
};var moleOpen = {
  init: function (proto) {
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
    this.initChildScenes();
  },
  vars: function () {
    this.moleMouthEl = document.querySelector('#js-mole-mouth');
    this.moleBodyEl = document.querySelector('#js-mole-body');
    this.moleInnerEl = document.querySelector('#js-mole-inner');
    mojs.h.style(this.moleMouthEl, 'transform', 'scale(0.25)');
  },
  createTween: function () {

    var motionPathStagger = mojs.Stagger(mojs.MotionPath);

    var s = this.s;
    var moleOpenMotionPath = new motionPathStagger({
      // motionBlur: [.2, null, null, null, null],
      delay: [(this.delay + 100) * s, (this.delay + 250) * s, (this.delay + 250) * s, (this.delay + 225) * s, (this.delay + 225) * s],
      duration: [500 * s, 450 * s, 450 * s, 300 * s, 300 * s],
      path: [{ x: 25, y: -240 }, { x: 0, y: -1 }, { x: 0, y: -1 }, { x: 0, y: -1 }, { x: 0, y: -1 }],
      curvature: [{ x: '140%', y: '-15%' }, { x: '8000%', y: '-15%' }, { x: '4000%', y: '-15%' }, { x: '6000%' }, { x: '6000%' }],
      el: [this.moleEl, this.moleHandEl, this.moleHandLeftEl, this.moleGlassesEl, this.moleGlassesLeftEl],
      easing: ['expo.out', 'expo.out', 'expo.out', 'bounce.out', 'bounce.out'],
      onStaggerStart: () => {this.isSound && this.whooshSound1.play();} });


    var coneEasing = mojs.easing.path('M0,100 C0,100 19.2604909,99.9551166 20.5142238,99.9551166 C22.4949103,-13.4780187 30.6324028,0.551751812 30.6324028,0.551751812 C34.4304749,8.15161955 38.3387131,36.3731334 42.4370999,100 C42.4370999,101.784879 50.525191,-14.4647311 61.3868482,100 C61.3868482,100.758318 66.9909069,43.8552324 74.4543142,100 C74.4543142,100.959118 78.2476568,70.9090718 83.7423864,100 C83.7423864,100 86.5506362,83.5459334 90.2534996,100 C90.2534996,100.758318 91.893059,90.3911797 94.5652129,100 C94.5652129,100.155918 95.9831925,95.5454201 97.8710986,100 C97.8710986,100.155918 99.1048209,98.0723403 100,100');
    var coneTween = new mojs.Tween({
      delay: (this.delay + 0) * this.s,
      duration: 1200 * this.s,
      onUpdate: p => {
        var coneP = coneEasing(p);
        mojs.h.style(this.moleConeEl, 'transform', `rotateX(${140 * coneP}deg) rotateY(${-20 * coneP}deg) translateY(${-6 * coneP}px)`);
        mojs.h.style(this.moleConeShadowEl, {
          opacity: 1 - coneP,
          transform: `scaleX(${1 - mojs.easing.cubic.in(coneP)}) translateZ(0)` });

      } });


    var stretchCurve = mojs.easing.path('M0,0 C0,0 31.4848633,29.7739254 55.2021484,-4.28613761e-07 C74.9160156,-20.18457 100,0 100,0');
    var stretchTween = new mojs.Tween({
      delay: (this.delay + 0) * this.s,
      duration: 500 * this.s,
      onUpdate: p => {
        var stretchP = stretchCurve(p);
        var inv = 1 + (1 - stretchP);
        mojs.h.setPrefixedStyle(this.moleInnerEl, 'transform', `scaleX(${stretchP}) scaleY(${inv}) translateZ(0)`);
      } });


    this.moleTimeline.add(moleOpenMotionPath, coneTween, stretchTween);
  },

  initChildScenes: function () {
  }

  // -- MOLE RANTING
  // --- MOLE RANTING TONGUE
};var tongue = {
  init: function (proto) {
    proto && Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
    // this.initChildScenes();
  },
  vars: function () {
    this.delay = this.handRantingDuration + 275;this.duration = 1800;
  },
  createTween: function () {
    var skewCurve = mojs.easing.path('M0,100 C0,100 18.1450901,69.0663515 24.0949898,99.9609384 C30.0448895,130.855525 100,100 100,100');
    var handCurve = mojs.easing.path('M0,-3.55271368e-14 C10.9545898,-40.8999024 23.9307575,-0.575683661 23.930758,0.136022468 C23.9307575,99.5087928 23.9307575,123.533199 42.6040039,123.533196 C47.594178,123.533196 54.2372213,123.00636 61.2202377,122.247035 C61.5346348,122.212848 63.3167217,121.96483 65.9540934,121.59172 C76.2346029,120.13733 99.5107422,116.78222 99.5107422,116.78222');
    var mouthCurve = mojs.easing.path('M0,0.300003052 C0,-118.289845 23.9999996,0.30000305 23.9999996,0.30000305 C23.9999996,0.30000305 28.9929691,57.0874986 31.8132816,63.7992219 C86.0328155,57.0874986 100,72.5585908 100,72.5585908');
    var noizeCurve = mojs.easing.path('M0,99.05 L24.2114672,99.1070023 L27.0786839,106.049107 L29.2555809,92.7589286 L32.0340385,103.220982 L35.3459816,94.0055804 L38.3783493,102.496652 L41.0513382,95.3588169 L43.7739944,106.049107 L45.6729927,96.3013392 L50,104.487165 L53.3504448,92.7589286 L57.7360497,103.220982 L60.8616066,95.3588169 L65.0345993,102.496652 L68.6997757,96.9146207 L71.6646194,101.435268 L75.0262299,95.3588169 L78.0089264,104.487165 L81.2276764,92.7589286 L84.390625,102.496652 L85.7360458,95.3588169 L88.4709854,101.435268 L90.9453125,96.3013392 L94.2198639,103.220982 L96.1110458,94.0055804 L100,99.05');

    var saliva = new mojs.Burst({
      parent: this.moleEl,
      type: 'circle',
      fill: 'white',
      duration: this.duration / 1.3 * this.s,
      x: 145, y: 105,
      delay: `stagger(${this.duration / 4 * this.s}, rand(50, 100))`,
      degree: 0,
      angle: { 75: 150 },
      isSwirl: true,
      randomRadius: .75,
      radius: { 0: 150 },
      count: 16,
      isRunLess: true,
      childOptions: {
        radius: { 'rand(.5,2)': 0 },
        duration: 300 * this.s } });



    saliva.el.style['z-index'] = 10;

    var salivaLauncher = new mojs.Tween({
      delay: 435 * this.s,
      onStart: () => {
        this.isSound && this[`salivaSound${Math.round(mojs.h.rand(1, 2))}`].play();
      } });


    var squintCurve = mojs.easing.mix({ to: .25, value: 1 }, { to: 1, value: 'cubic.in' });
    mojs.h.style(this.moleMouthEl, 'transform-origin', `right center`);
    var tween = new mojs.Tween({
      delay: this.delay * this.s,
      duration: this.duration * this.s,
      onStart: () => {if (!this.isMobile()) {saliva.run();};salivaLauncher.run();this.isSound && this.sighSound1.play();},
      onUpdate: p => {
        var skewP = skewCurve(p);
        var handP = handCurve(p);
        var mouthP = mouthCurve(p);
        var noizeP = noizeCurve(p);

        mojs.h.style(this.moleEl, 'transform', `skewX(${75 * skewP - 5 * noizeP}deg) skewY(${15 * noizeP}deg) ${this.zHack}`);
        mojs.h.style(this.moleHandEl, 'transform', `rotate(${this.handAngle * handP + 30 * noizeP}deg) ${this.zHack}`);
        mojs.h.style(this.moleHandLeftEl, 'transform', `rotate(${100 * skewP - 15 * noizeP}deg) translateY(${-100 * skewP}px) ${this.zHack}`);
        mojs.h.style(this.moleMouthEl, 'transform', `scale(${mouthP + 3 * noizeP}) translate(${-30 * skewP}px, 0) ${this.zHack}`);
        mojs.h.style(this.moleGlassesEl, 'transform', `translateY(${20 * noizeP}px) ${this.zHack}`);
        mojs.h.style(this.moleGlassesLeftEl, 'transform', `translateY(${10 * noizeP}px) ${this.zHack}`);

        mojs.h.style(this.moleEyeEl, 'transform', ``);

        mojs.h.style(this.moleConeEl, 'transform', `rotateZ(${20 * noizeP}deg) ${this.zHack}`);

        mojs.h.style(this.moleTongueEl, 'transform', `translate(${-140 * skewP}px, 0) ${this.zHack}`);
        this.moleTonguePath.setAttribute('d', `M0 30 Q 20 ${10 + 550 * noizeP}, 30 25 T 50 30`);

        // SQUINT
        var squintP = squintCurve(p);
        var n_squintP = mojs.easing.inverse(squintP);
        this.moleEyeLashEl.setAttribute('d', `M0,0 Q 6.5 ${10 * squintP}, 13 0`);
        this.moleEyeLashEl.setAttribute('stroke-width', 2 + 1.5 * n_squintP);
        mojs.h.style(this.moleEyeEl, 'transform', `rotate(${37 * n_squintP}deg) translate(${7 * n_squintP}px, ${-4 * n_squintP}px) scaleX(${1 - .4 * n_squintP}) ${this.zHack}`);
      } });

    // tween.start();
    this.moleRantingTween.add(tween);
  }


  // --- MOLE RANTING HAND
  // SCENES
};var moleRantingHand = {
  init: function (proto) {
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
    this.initChildScenes();
  },
  vars: function () {
  },
  createTween: function () {
    var handAngleCurve = mojs.easing.path('M0,100 L3.13085938,99.9660558 C11.128418,-42.5141612 24.7357688,10.3389432 24.7357688,10.3389432 C24.7357688,10.3389432 35.4207115,6.43611673 35.420711,19.551763 C35.420711,19.551763 35.4207115,28.5204487 38.4679491,20.1010452 C45.9122391,-2.41706848 48.2480469,19.3280379 49.4205542,19.3280385 C49.4205546,6.88000841 55.0592461,-3.51334643 59,15.8785806 C60.6251608,22.5931723 56.8918457,-3.3408203 65.4951172,-3.3408203 C68.7340668,-3.54252346 69.730594,6.60260412 70.328125,14.0234368 C70.9301836,21.5004985 74.0961573,27.0302603 74.7888322,18.8316301 C77.5927734,-0.603027419 100,0 100,0');
    var handStretchCurve = mojs.easing.path('M1.13686838e-13,100.140658 C1.13686838e-13,100.140658 5.01160836,100.097038 8.74856937,100.270866 C15.1440434,57.219434 23.7860103,98.447299 23.7860103,100.097037 C30.2913574,71.1380541 36.1603623,98.3939125 36.160361,100.162142 C41.9325738,44.182975 49.1344299,98.9199542 49.1344299,100.053418 C53.6287224,80.2298508 59.2720971,99.9303714 59.2720971,99.9303714 C59.2720971,99.9303714 63.6972656,56.5605469 70.2742418,100.003578 C72.7851563,131.47461 74.5979385,101.614397 75,100.097038 C78.8691406,68.734375 82.3889542,100.577847 94.1109085,100.097038 L99.9962311,100.097038');
    var tween = new mojs.Tween({
      delay: 500 * this.s,
      duration: this.handRantingDuration * this.s,
      onStart: () => {
        this.isSound && this[`rantSound${Math.round(mojs.h.rand(1, 3))}`].play();
      },
      onUpdate: p => {
        var handP = handAngleCurve(p);
        var handStretchP = handStretchCurve(p);
        var inv = mojs.easing.inverse(handStretchP);
        var shiftP = mojs.easing.quad.out(p);
        var handStretchShiftP = handStretchCurve(shiftP);

        mojs.h.style(this.moleHandEl, 'transform', `rotate(${this.handAngle * handP}deg) scaleX(${1 - .4 * handStretchP}) scaleY(${1 + handStretchP}) ${this.zHack}`);
        mojs.h.style(this.moleHandLeftEl, 'transform', `translateY(${-75 * handStretchP}px) ${this.zHack}`);

        mojs.h.style(this.moleGlassesEl, 'transform', `translateY(${-45 * handStretchShiftP}px) ${this.zHack}`);
        mojs.h.style(this.moleGlassesLeftEl, 'transform', `translateY(${-45 * handStretchShiftP}px) ${this.zHack}`);

        var bodyScale = .25 * handStretchP;
        mojs.h.style(this.moleEl, 'transform', `scaleY(${1 + bodyScale}) scaleX(${1 - bodyScale}) ${this.zHack}`);
        mojs.h.style(this.moleMouthEl, 'transform', `scale(${Math.min(1 - 5 * handStretchP, 1.2)}) translateX(${Math.min(-50 * handStretchShiftP, 10)}px) ${this.zHack}`);
        mojs.h.style(this.moleMouthInnerEl, 'transform', `scale(${1 - 4 * handStretchP}) translateX(${Math.min(-150 * handStretchP, 10)}px) translateY(${-20 * handStretchShiftP}px) ${this.zHack}`);
        mojs.h.style(this.moleMouthOuterEl, 'border-top-right-radius', `${200 * handStretchShiftP}%`);
      } });

    this.moleRantingTween.add(tween);
  },
  initChildScenes: function () {}

  // --- MOLE RANTING SEARCH
};var moleRantingSearch = {
  init: function (proto) {
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
    this.initChildScenes();
  },
  vars: function () {
    this.doorEl = document.querySelector('#js-door');
    this.doorShadowEl = document.querySelector('#js-door-shadow');
    this.doorHandleShadowEl = document.querySelector('#js-door-handle-shadow');

  },
  createTween: function () {
    var timeLine = new mojs.Timeline();
    var duration = 1000;

    var doorSound1Tween = new mojs.Tween({
      delay: 510 * this.s,
      onStart: () => {this.isSound && this.doorOpenSoundSmall.play();} });


    var wehSound1Tween = new mojs.Tween({
      delay: 120 * this.s,
      onStart: () => {this.isSound && this.wehSound1.play();} });


    var wehSound2Tween = new mojs.Tween({
      delay: 400 * this.s,
      onStart: () => {this.isSound && this.wehSound2.play();} });


    var e = mojs.easing;
    var bodySkewC = e.path('M0.506500786,100 C0.506500786,100 5.85142524,99.4107621 7.9810887,99.4107621 C7.9810887,66.899765 14.0576168,-39.8300779 32.375588,23.1162121 C34.150559,29.6685115 40.0307601,29.7045647 40.8105474,23.116212 C49.0488287,-46.488282 57.7949224,0 66.8462524,0.141452063 C79.10852,0.14145202 100.481854,0 100.481854,0');
    var riseC = e.path('M0.504882812,100 L8.29748693,100 C19.3574219,34.4345703 32.1187229,99.4550794 32.1187235,100 C32.1187235,100 37.9296875,122.487303 43.1708984,99.4550794 C51.9283709,10.3408208 63.429554,94.8232407 63.4295529,100 C67.7822266,127.167966 76.9882812,99.4550793 76.9882812,99.4550793 L100.110353,100');
    var doorAngleC = e.mix({ to: .45, value: 1 }, { to: 1, value: bodySkewC });
    var tween = new mojs.Tween({
      duration: duration * this.s,
      onUpdate: p => {
        var riseP = riseC(p);
        var bodySkewP = bodySkewC(p);
        mojs.h.style(this.moleEl, 'transform', `skewX(${9 * bodySkewP}deg) scale(${1 - .15 * riseP}, ${1 + .15 * riseP}) translate(0, ${-17 * riseP}px) ${this.zHack}`);
        mojs.h.style(this.moleHandEl, 'transform', `rotate(${29.5 + 65 * bodySkewP}deg) scaleY(${1 + .1 * bodySkewP}) translateY(${-15 * riseP}px) ${this.zHack}`);
        mojs.h.style(this.moleHandLeftEl, 'transform', `rotate(${20 * bodySkewP}deg) translate(${30 * bodySkewP}px, ${-10 * bodySkewP - 10 * riseP}px) ${this.zHack}`);

        this.moleEyeLashEl.setAttribute('d', `M0,0 Q ${6.5 - 13 * riseP} ${10 - 30 * Math.max(riseP, 0)}, 13 0`);
        this.moleEyeLashEl.setAttribute('stroke-width', 2 + 2.5 * riseP);
        mojs.h.style(this.moleEyeEl, 'transform', `rotate(${60 * riseP}deg) translate(${7 * riseP}px, ${-4 * riseP}px) scaleX(${1 - .9 * riseP}) ${this.zHack}`);

        mojs.h.style(this.moleMouthEl, 'transform', `scale(${.3 + 2.4 * riseP}) ${this.zHack}`);
      } });


    var tween2 = new mojs.Tween({
      duration: duration * this.s,
      onUpdate: p => {
        var riseP = riseC(p);
        mojs.h.setPrefixedStyle(this.moleConeEl, 'transform', `rotateX(${210 * riseP}deg) ${this.zHack}`);
        mojs.h.setPrefixedStyle(this.moleGlassesEl, 'transform', `translateY(${-25 * riseP}px) ${this.zHack}`);
        mojs.h.setPrefixedStyle(this.moleGlassesLeftEl, 'transform', `translateY(${-25 * riseP}px) ${this.zHack}`);
      } });


    var tween3 = new mojs.Tween({
      delay: 50 * this.s,
      duration: duration * this.s,
      onUpdate: p => {
        var doorAngleP = doorAngleC(p);
        mojs.h.setPrefixedStyle(this.doorEl, 'transform', `rotateY(${-125 + 90 * e.inverse(doorAngleP)}deg) scaleX(.75) ${this.zHack}`);
        mojs.h.setPrefixedStyle(this.doorShadowEl, 'transform', `scaleX(${1 - .45 * e.inverse(doorAngleP)}) ${this.zHack}`);
      } });


    timeLine.add(tween, wehSound1Tween, wehSound2Tween, tween2, tween3, doorSound1Tween);
    this.moleRantingTween.append(timeLine);
  },
  initChildScenes: function () {} };


var moleRanting = {
  init: function (proto) {
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
    this.initChildScenes();
  },
  vars: function () {
    this.scene = document.querySelector('#js-mole-scene');
    this.moleEl = document.querySelector('#js-mole-inner');
    this.moleTongueEl = document.querySelector('#js-mole-tongue');
    this.moleTonguePath = document.querySelector('#js-mole-tongue-path');

    this.handAngle = -175;
    this.handRantingDuration = 1500;
  },
  createTween: function () {
    this.moleRantingTween = new mojs.Timeline();
  },
  initChildScenes: function () {
    moleRantingHand.init(this);
    tongue.init(this);
    moleRantingSearch.init(this);
    this.moleTimeline.add(this.moleRantingTween);
  }


  // -- MOLE CLOSE
};var close = {
  init: function (proto) {
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
  },
  vars() {
    this.moleInnerEl = document.querySelector('#js-mole-inner');
  },
  resetParts() {},

  createTween() {
    var delay = 4400;
    var e = mojs.easing,h = mojs.h;
    this.closeTimeline = new mojs.Timeline({ delay: delay * this.s });

    var closeSoundLauncher = new mojs.Tween({
      duration: 50,
      delay: 150 * this.s,
      onStart: () => {this.isSound && this.doorCloseSound.play();this.isSound && this.fallingSound.play();} });


    var moveDownTween = new mojs.Tween({
      duration: 600 * this.s,
      onStart: () => {this.moleHandCircleEl.style.opacity = 1;},
      onComplete: () => {
        this.resetParts();
        this.moleHandCircleEl.style.opacity = 0;
        h.style(this.moleHandEl, 'transform', '');
        h.style(this.moleHatEl, 'transform', '');
        this.moleHatEl.style['z-index'] = 4;
        this.moleEyeLashEl.setAttribute('d', `M0,0 Q 6.5 10, 13 0`);
        this.moleEyeLashEl.setAttribute('stroke-width', 2);
        mojs.h.style(this.moleEyeEl, 'transform', '');
        h.style(this.moleGlassesEl, 'transform', '');
        h.style(this.moleGlassesLeftEl, 'transform', '');
      },
      onUpdate: p => {

        var cubicInP = e.cubic.in(p);
        var quadInP = e.quad.in(p);
        var expoInP = e.expo.in(p);

        h.style(this.moleEl, 'transform', `translate(${25}px, ${-240 + 360 * cubicInP}px) ${this.zHack}`);
        // (p === 1) && (this.moleEl.style['z-index'] = 0);

        h.style(this.moleInnerEl, 'transform', `skewX(${9 * (1 - p)}deg) scale(${1 - .2 * cubicInP}, ${1 + .2 * cubicInP}) ${this.zHack}`);

        h.style(this.moleHandEl, 'transform', `rotate(${94.5 + 100.5 * quadInP}deg) scaleY(${1.1 - .1 * quadInP}) translateY(${70 * quadInP}px) ${this.zHack}`);
        h.style(this.moleHandLeftEl, 'transform', `rotate(${20 - 20 * quadInP}deg) translate(${30 - 35 * quadInP}px, ${-10 - 70 * quadInP}px) ${this.zHack}`);

        h.style(this.doorEl, 'transform', `rotateY(${-125 + 125 * cubicInP}deg) scaleX(${.75 + .25 * expoInP}) translate(${8 * expoInP}px, ${8 * expoInP}px) ${this.zHack}`);
        h.style(this.doorShadowEl, 'transform', `scaleX(${1 - 1.65 * cubicInP}) ${this.zHack}`);

        h.style(this.moleConeEl, 'transform', `rotateX(${150 * quadInP}deg) rotateY(${-14 * quadInP}deg) translateY(${-5 * quadInP}px) ${this.zHack}`);
        this.moleConeShadowEl.style.opacity = 1 - p;
        h.style(this.moleHatEl, 'transform', `translateY(${-35 * expoInP}px) ${this.zHack}`);
        this.moleHatEl.style['z-index'] = Math.round(12 - 12 * p);

        h.style(this.moleGlassesEl, 'transform', `translateY(${-85 * expoInP}px) ${this.zHack}`);
        h.style(this.moleGlassesLeftEl, 'transform', `translateY(${-85 * expoInP}px) ${this.zHack}`);

        this.moleEyeLashEl.setAttribute('d', `M0,0 Q 6.5 ${10 * p}, 13 0`);
        this.moleEyeLashEl.setAttribute('stroke-width', 2 + 1.5 * p);
        mojs.h.style(this.moleEyeEl, 'transform', `translate(${7 * p}px, ${-5 * p}px) scaleX(${1 - .4 * p}) ${this.zHack}`);
        mojs.h.style(this.moleMouthInnerEl, 'transform', `scale(${.3 - .3 * p}) ${this.zHack}`);

      } });


    var burstStagger = new mojs.Stagger(mojs.Burst)({
      quantifier: 4,
      parent: this.moleSceneEl,
      x: [145, 295, 50, 175],
      y: [75, 25, 25, 0],
      shiftY: [{ 0: -65 }, { 0: -50 }, { 0: -50 }, { 0: -35 }],
      degree: 50,
      randomRadius: 1,
      randomAngle: .2,
      angle: -25,
      isRunLess: true,
      fill: 'white',
      count: 'rand(3,5)',
      childOptions: { radius: { 'rand(2, 5)': 0 } } });


    for (var module of burstStagger.childModules) {module.el.style['z-index'] = 3;}
    var doorWaveTween = new mojs.Tween({
      duration: 400 * this.s,
      onUpdate: p => {
        mojs.h.style(this.doorWaveEl, 'transform', `scale(${1.1 + 2 * e.cubic.out(p)}) ${this.zHack}`);
        this.doorWaveEl.style.opacity = 1 - e.expo.out(p);
      } });


    var noiseCurve = mojs.easing.path('M0.259486607,100.071429 C0.259486607,100.071429 4.27680653,83.4402907 6.90123802,100.071429 C9.52566951,116.702566 13.5373987,100.071429 13.5373987,100.071429 C13.5373987,100.071429 16.7628232,87.9112723 21.6735437,100.071429 C26.5842642,112.231585 30.9212118,100.071429 30.9212118,100.071429 C30.9212118,100.071429 37.4556606,76.8219874 36.8193484,100.071429 C36.1830363,123.32087 44.2583534,100.071429 44.2583534,100.071429 C44.2583534,100.071429 52.7238326,76.230468 58.7731881,100.071429 C64.8225436,123.912389 71.8496108,100.071429 71.8496108,100.071429 C71.8496108,100.071429 76.8389838,84.6718743 77.5101727,100.071429 C78.1813616,115.470983 86.7695435,100.071429 86.7695435,100.071429 C86.7695435,100.071429 90.9161334,91.365514 92.5121951,100.071429 C94.1082567,108.777343 97.4553275,100.071429 97.4553275,100.071429 C97.4553275,100.071429 98.5630678,96.4871648 100.000003,100.071429');
    var noiseTween = new mojs.Tween({
      duration: 200 * this.s,
      onStart: () => {this.isSound && this.boomSound.play();},
      onUpdate: p => {
        mojs.h.style(this.sceneEl, 'transform', `translate(${noiseCurve(p) * 40}px, ${-noiseCurve(p) * 20}px) ${this.zHack}`);
      } });


    var staggerAddTween = this.isMobile() ? new mojs.Timeline() : burstStagger.timeline;
    var doorWaveAddTween = this.isMobile() ? new mojs.Timeline() : doorWaveTween;

    this.closeTimeline.
    add(moveDownTween, closeSoundLauncher).
    append([staggerAddTween, doorWaveAddTween, noiseTween]);
    this.moleTimeline.add(this.closeTimeline);

  },

  initChildScenes: function () {
  } };


var mole = {
  init(proto) {
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
    this.initChildScenes();
    this.initChildParts();
    this.mainTween.add(this.moleTimeline);
  },
  vars() {
    this.scene = document.querySelector('#js-mole-scene');
  },
  createTween() {
    this.moleTimeline = new mojs.Timeline({ delay: (this.cubeDuration - 1200) * this.s });},

  initChildScenes() {
    doorOpen.init(this);
    moleOpen.init(this);
  },

  initChildParts() {
    moleRanting.init(this);
    close.init(this);
  } };


var main = {
  s: 1, // global time coefficient
  zHack: ' translateZ(0) ',
  mainTween: new mojs.Timeline({ repeat: 999999, delay: 0 }),
  delay: 0,
  cubeDuration: 3900,
  isSound: true,
  init() {
    this.vars();
    this.showHiddenParts();
    this.loadSounds();
  },

  showHiddenParts() {
    this.sceneEl.style.opacity = 1;
    this.tutorialsLinkEl.style.opacity = 1;
  },

  loadSounds() {
    var soundBase = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6859/';
    var soundUrl = `${soundBase}fall-kick-1.${this.soundFileType}`;
    this.fall1Sound = new Howl({ urls: [soundUrl], onload: this.tryToLaunch.bind(this) });
    this.fall2Sound = new Howl({ urls: [soundUrl], rate: .9, volume: .8, onload: this.tryToLaunch.bind(this) });
    this.fall3Sound = new Howl({ urls: [soundUrl], rate: .8, volume: .5, onload: this.tryToLaunch.bind(this) });
    this.fall4Sound = new Howl({ urls: [soundUrl], rate: .7, volume: .4, onload: this.tryToLaunch.bind(this) });
    this.fall5Sound = new Howl({ urls: [soundUrl], rate: .6, volume: .3, onload: this.tryToLaunch.bind(this) });

    this.whooshSound1 = new Howl({ urls: [`${soundBase}whoosh-1.${this.soundFileType}`], volume: .4, rate: 1.4, onload: this.tryToLaunch.bind(this) });
    this.doorOpenSound = new Howl({ urls: [`${soundBase}door-open-1.${this.soundFileType}`], rate: 2.5, onload: this.tryToLaunch.bind(this) });
    this.salivaSound1 = new Howl({ urls: [`${soundBase}saliva-1.${this.soundFileType}`], onload: this.tryToLaunch.bind(this) });
    this.salivaSound2 = new Howl({ urls: [`${soundBase}saliva-2.${this.soundFileType}`], onload: this.tryToLaunch.bind(this) });
    this.sighSound1 = new Howl({ urls: [`${soundBase}sigh-1.${this.soundFileType}`], rate: 1.8, onload: this.tryToLaunch.bind(this) });

    this.doorOpenSoundSmall = new Howl({ urls: [`${soundBase}door-open-small-1.${this.soundFileType}`], rate: 1.9, volume: .6, onload: this.tryToLaunch.bind(this) });
    this.wehSound1 = new Howl({ urls: [`${soundBase}ugh-2.${this.soundFileType}`], volume: .35, rate: 1.25, onload: this.tryToLaunch.bind(this) });
    this.wehSound2 = new Howl({ urls: [`${soundBase}ugh-1.${this.soundFileType}`], volume: .35, rate: 1.35, onload: this.tryToLaunch.bind(this) });

    this.rantSound1 = new Howl({ urls: [`${soundBase}rant-1-1.${this.soundFileType}`], rate: 1.25, volume: .65, onload: this.tryToLaunch.bind(this) });
    this.rantSound2 = new Howl({ urls: [`${soundBase}rant-1-2.${this.soundFileType}`], rate: 1.25, volume: .65, onload: this.tryToLaunch.bind(this) });
    this.rantSound3 = new Howl({ urls: [`${soundBase}rant-1-3.${this.soundFileType}`], rate: 1.25, volume: .65, onload: this.tryToLaunch.bind(this) });

    this.doorCloseSound = new Howl({ urls: [`${soundBase}door-close-1.${this.soundFileType}`], rate: 1.5, volume: .65, onload: this.tryToLaunch.bind(this) });
    this.boomSound = new Howl({ urls: [`${soundBase}fall-kick-1.${this.soundFileType}`], rate: .5, onload: this.tryToLaunch.bind(this) });
    this.fallingSound = new Howl({ urls: [`${soundBase}falling-1.${this.soundFileType}`], rate: 4.5, volume: .05, onload: this.tryToLaunch.bind(this) });
  },

  tryToLaunch() {
    this.soundsLoadedCnt++;
    if (this.soundsLoadedCnt >= 19 && !this.isLaunched) {this.isLaunched = true;this.onSoundsLoaded();}
  },

  onSoundsLoaded() {
    this.spinnerEl.style.opacity = 0;
    cube.init(this);
    mole.init(this);
    this.mainTween.start();
  },

  vars() {
    this.sceneEl = document.querySelector('#js-mole-scene');
    this.moleEl = document.querySelector('#js-mole');
    this.moleHatEl = document.querySelector('#js-mole-hat');
    this.moleConeEl = document.querySelector('#js-mole-hat-cone');
    this.moleConeShadowEl = document.querySelector('#js-mole-hat-shadow');
    this.moleGlassesEl = document.querySelector('#js-mole-glasses');
    this.moleGlassesLeftEl = document.querySelector('#js-mole-glasses-left');
    this.moleMouthEl = document.querySelector('#js-mole-mouth');
    this.moleMouthInnerEl = document.querySelector('#js-mole-mouth-inner');
    this.moleMouthOuterEl = document.querySelector('#js-mole-mouth-outer');
    this.moleHandEl = document.querySelector('#js-mole-hand');
    this.moleHandLeftEl = document.querySelector('#js-mole-hand-left');
    this.moleHandCircleEl = document.querySelector('#js-mole-hand-circle');
    this.doorEl = document.querySelector('#js-door');
    this.doorShadowEl = document.querySelector('#js-door-shadow');
    this.doorHandleShadowEl = document.querySelector('#js-door-handle-shadow');
    this.moleEyeEl = document.querySelector('#js-mole-eye');
    this.moleEyeLashEl = document.querySelector('#js-mole-eye-lash');
    this.moleSceneEl = document.querySelector('#js-mole-scene');
    this.doorWaveEl = document.querySelector('#js-door-wave');
    this.tutorialsLinkEl = document.querySelector('#js-tutorials-link');
    this.spinnerEl = document.querySelector('#js-spinner');
    this.soundFileType = this.isOpera() ? 'wav' : 'mp3';
    this.soundsLoadedCnt = 0;
  },
  isMobile: function () {
    return !!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i));
  },
  isOpera: function () {
    var userAgent = navigator.userAgent;
    return /^Opera\//.test(userAgent) || /\x20OPR\//.test(userAgent);
  } };


main.init();