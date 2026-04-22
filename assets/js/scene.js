/* Three.js constellation hero scene */
(function () {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const W = () => window.innerWidth;
  const H = () => window.innerHeight;

  /* ── renderer ── */
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(W(), H());

  /* ── scene / camera ── */
  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, W() / H(), 0.1, 1000);
  camera.position.z = 18;

  /* ── particles ── */
  const COUNT = 130;
  const pos   = [];   // THREE.Vector3 positions
  const vel   = [];   // THREE.Vector3 velocities

  for (let i = 0; i < COUNT; i++) {
    pos.push(new THREE.Vector3(
      (Math.random() - .5) * 30,
      (Math.random() - .5) * 18,
      (Math.random() - .5) * 8
    ));
    vel.push(new THREE.Vector3(
      (Math.random() - .5) * .012,
      (Math.random() - .5) * .008,
      0
    ));
  }

  /* dots geometry */
  const dotGeo  = new THREE.BufferGeometry();
  const dotPos  = new Float32Array(COUNT * 3);
  pos.forEach((p, i) => { dotPos[i*3]=p.x; dotPos[i*3+1]=p.y; dotPos[i*3+2]=p.z; });
  dotGeo.setAttribute('position', new THREE.BufferAttribute(dotPos, 3));

  /* dot colours — violet ↔ pink gradient per particle */
  const dotCol = new Float32Array(COUNT * 3);
  for (let i = 0; i < COUNT; i++) {
    const t = Math.random();
    dotCol[i*3]   = .48  + t * (.93 - .48);   // R
    dotCol[i*3+1] = .23  + t * (.28 - .23);   // G
    dotCol[i*3+2] = .93  + t * (.60 - .93);   // B
  }
  dotGeo.setAttribute('color', new THREE.BufferAttribute(dotCol, 3));

  const dotMat  = new THREE.PointsMaterial({
    size: .14, vertexColors: true,
    transparent: true, opacity: .9, sizeAttenuation: true
  });
  const dots = new THREE.Points(dotGeo, dotMat);
  scene.add(dots);

  /* lines geometry — pre-alloc for max possible connections */
  const MAX_LINES = COUNT * 12;
  const linePositions = new Float32Array(MAX_LINES * 6);
  const lineAlpha     = new Float32Array(MAX_LINES);
  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
  const lineMat = new THREE.LineBasicMaterial({
    color: 0x8b5cf6, transparent: true, opacity: .18
  });
  const lines = new THREE.LineSegments(lineGeo, lineMat);
  scene.add(lines);

  /* ── mouse ── */
  const mouse = { x: 0, y: 0 };
  window.addEventListener('mousemove', e => {
    mouse.x = (e.clientX / W() - .5) * 2;
    mouse.y = -(e.clientY / H() - .5) * 2;
  });

  /* ── scroll fade ── */
  let scrollY = 0;
  window.addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });

  /* ── resize ── */
  window.addEventListener('resize', () => {
    camera.aspect = W() / H();
    camera.updateProjectionMatrix();
    renderer.setSize(W(), H());
  });

  /* ── animate ── */
  const CONNECT_DIST = 5.5;
  let frameId;

  function tick() {
    frameId = requestAnimationFrame(tick);

    /* hero fade on scroll */
    const fade = Math.max(0, 1 - scrollY / (H() * .6));
    canvas.style.opacity = fade;
    if (fade === 0) return;

    /* gentle camera drift toward mouse */
    camera.position.x += (mouse.x * 1.5 - camera.position.x) * .025;
    camera.position.y += (mouse.y * 1.0 - camera.position.y) * .025;
    camera.lookAt(scene.position);

    /* move particles + bounce */
    const pa = dotGeo.attributes.position;
    for (let i = 0; i < COUNT; i++) {
      pos[i].add(vel[i]);
      if (Math.abs(pos[i].x) > 15) vel[i].x *= -1;
      if (Math.abs(pos[i].y) > 9)  vel[i].y *= -1;
      pa.setXYZ(i, pos[i].x, pos[i].y, pos[i].z);
    }
    pa.needsUpdate = true;

    /* rebuild lines */
    let li = 0;
    for (let i = 0; i < COUNT && li < MAX_LINES; i++) {
      for (let j = i + 1; j < COUNT && li < MAX_LINES; j++) {
        const d = pos[i].distanceTo(pos[j]);
        if (d < CONNECT_DIST) {
          linePositions[li*6]   = pos[i].x; linePositions[li*6+1] = pos[i].y; linePositions[li*6+2] = pos[i].z;
          linePositions[li*6+3] = pos[j].x; linePositions[li*6+4] = pos[j].y; linePositions[li*6+5] = pos[j].z;
          li++;
        }
      }
    }
    lineGeo.attributes.position.needsUpdate = true;
    lineGeo.setDrawRange(0, li * 2);
    lineMat.opacity = .16 * fade;

    renderer.render(scene, camera);
  }
  tick();
})();
