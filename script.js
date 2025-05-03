// Enable sliding for each image group
document.querySelectorAll('.service-images').forEach(container => {
  let startX = 0;
  container.addEventListener('mousedown', e => {
    startX = e.pageX - container.offsetLeft;
    container.style.cursor = 'grabbing';
    container.isDown = true;
  });

  container.addEventListener('mouseleave', () => {
    container.isDown = false;
    container.style.cursor = 'grab';
  });

  container.addEventListener('mouseup', () => {
    container.isDown = false;
    container.style.cursor = 'grab';
  });

  container.addEventListener('mousemove', e => {
    if (!container.isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft -= walk;
  });
});
