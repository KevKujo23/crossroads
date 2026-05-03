const sounds = {}

export function playSound(name) {
  if (!sounds[name]) {
    sounds[name] = new Audio(`/${name}.mp3`)
    sounds[name].volume = 0.5
  }
  sounds[name].currentTime = 0
  sounds[name].play().catch(() => {})
}

export function startLoop(name, volume = 0.5) {
  if (!sounds[name]) {
    sounds[name] = new Audio(`/${name}.mp3`)
    sounds[name].loop = true
  }
  sounds[name].volume = volume
  sounds[name].play().catch(() => {})
}

export function stopLoop(name) {
  if (sounds[name]) {
    sounds[name].pause()
    sounds[name].currentTime = 0
  }
}
