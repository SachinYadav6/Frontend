import { useEffect, useMemo, useState } from 'react'

import {
  getNotes,
  saveNotes,
  getTheme,
  saveTheme,
} from '../Services/storageServices'

import { getCurrentDate } from '../Services/dataServices'

export default function useNotes() {
  const [notes, setNotes] = useState(getNotes)
  const [theme, setTheme] = useState(getTheme)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  useEffect(() => {
    saveNotes(notes)
  }, [notes])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    saveTheme(theme)
  }, [theme])

  const addNote = ({ title, content, category }) => {
    const currentDate = getCurrentDate()

    const newNote = {
      id: crypto.randomUUID(),
      title: title.trim(),
      content: content.trim(),
      category,
      pinned: false,
      createdAt: currentDate,
      updatedAt: currentDate,
    }

    setNotes((prev) => [newNote, ...prev])
  }

  const updateNote = (id, { title, content, category }) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? {
            ...note,
            title: title.trim(),
            content: content.trim(),
            category,
            updatedAt: getCurrentDate(),
          }
          : note,
      ),
    )
  }

  const deleteNote = (id) => {
    setNotes((prev) =>
      prev.filter((note) => note.id !== id),
    )
  }

  const togglePin = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? {
            ...note,
            pinned: !note.pinned,
          }
          : note,
      ),
    )
  }

  const filteredNotes = useMemo(() => {
    const query = search.trim().toLowerCase()

    return [...notes]
      .filter((note) => {
        const matchesSearch =
          !query ||
          note.title.toLowerCase().includes(query) ||
          note.content.toLowerCase().includes(query)

        const matchesCategory =
          category === 'All' ||
          note.category === category

        return matchesSearch && matchesCategory
      })
      .sort((a, b) => {
        if (a.pinned !== b.pinned) {
          return Number(b.pinned) - Number(a.pinned)
        }

        return (
          new Date(b.updatedAt) -
          new Date(a.updatedAt)
        )
      })
  }, [notes, search, category])

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(
        notes.map((note) => note.category),
      ),
    ]

    return ['All', ...uniqueCategories]
  }, [notes])

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === 'light' ? 'dark' : 'light',
    )
  }

  return {
    notes,
    filteredNotes,
    categories,
    search,
    setSearch,
    category,
    setCategory,
    theme,
    addNote,
    updateNote,
    deleteNote,
    togglePin,
    toggleTheme,
  }
}