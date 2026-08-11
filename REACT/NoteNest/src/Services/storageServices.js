
const NOTES_KEY = 'notenest_notes'
const THEME_KEY = 'notenest_theme'

export const getNotes = () => {
  try {
    const notes = localStorage.getItem(NOTES_KEY)
    return notes ? JSON.parse(notes) : []
  } catch (error) {
    console.error('Failed to load notes:', error)
    return []
  }
}

export const saveNotes = (notes) => {
  try {
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes))
  } catch (error) {
    console.error('Failed to save notes:', error)
  }
}

export const getTheme = () => {
  return localStorage.getItem(THEME_KEY) || 'light'
}

export const saveTheme = (theme) => {
  localStorage.setItem(THEME_KEY, theme)
}

