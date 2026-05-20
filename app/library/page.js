// app/library/page.js

"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  BookOpen,
  Heart,
  Download,
  Settings,
  Search,
  LogOut,
} from "lucide-react";

export default function Library() {

  const router = useRouter();

  // STATES
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  const [activeMenu, setActiveMenu] =
    useState("library");

  const [search, setSearch] = useState("");

  // FETCH BOOKS
  useEffect(() => {

    fetchBooks();

  }, []);

  const fetchBooks = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/books"
      );

      setBooks(res.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  // FAVORITE TOGGLE
  const toggleFavorite = (bookId) => {

    if (favorites.includes(bookId)) {

      setFavorites(
        favorites.filter((id) => id !== bookId)
      );

    } else {

      setFavorites([
        ...favorites,
        bookId,
      ]);
    }
  };

  // LOGOUT
  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    router.push("/");
  };

  // SEARCH FILTER
  const filteredBooks = books.filter((book) =>
    book.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // FAVORITE FILTER
  const favoriteBooks = filteredBooks.filter(
    (book) => favorites.includes(book._id)
  );

  // WHICH BOOKS TO SHOW
  const displayBooks =
    activeMenu === "favorites"
      ? favoriteBooks
      : filteredBooks;

  // LOADING
  if (loading) {

    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-3xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#141414] text-white">

      {/* SIDEBAR */}
      <aside className="w-[260px] bg-[#0f0f0f] border-r border-gray-800 p-6 hidden md:flex flex-col justify-between">

        <div>

          {/* LOGO */}
          <img
            src="https://m.media-amazon.com/images/G/01/kfw/landing/img_logo._CB611756372_.png"
            alt="Kindle"
            className="w-28 mb-10"
          />

          {/* MENU */}
          <nav className="flex flex-col gap-3">

            {/* LIBRARY */}
            <button
              onClick={() =>
                setActiveMenu("library")
              }
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                activeMenu === "library"
                  ? "bg-[#1f1f1f]"
                  : "hover:bg-[#1f1f1f]"
              }`}
            >
              <BookOpen size={20} />
              Library
            </button>

            {/* FAVORITES */}
            <button
              onClick={() =>
                setActiveMenu("favorites")
              }
              className={`flex items-center justify-between px-4 py-3 rounded-xl transition ${
                activeMenu === "favorites"
                  ? "bg-[#1f1f1f]"
                  : "hover:bg-[#1f1f1f]"
              }`}
            >

              <div className="flex items-center gap-3">
                <Heart size={20} />
                Favorites
              </div>

              <span className="bg-red-500 text-xs px-2 py-1 rounded-full">
                {favorites.length}
              </span>
            </button>

            {/* DOWNLOAD */}
            <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#1f1f1f] transition">
              <Download size={20} />
              Downloads
            </button>

            {/* SETTINGS */}
            <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#1f1f1f] transition">
              <Settings size={20} />
              Settings
            </button>

          </nav>
        </div>

        {/* LOGOUT BUTTON */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition font-semibold"
        >
          <LogOut size={20} />
          Logout
        </button>
      </aside>

      {/* MAIN */}
      <div className="flex-1">

        {/* TOP BAR */}
        <header className="flex items-center justify-between px-8 py-5 border-b border-gray-800">

          <div>
            <h1 className="text-3xl font-bold">

              {activeMenu === "favorites"
                ? "Favorite Books"
                : "Your Library"}

            </h1>

            <p className="text-gray-400 text-sm mt-1">

              {activeMenu === "favorites"
                ? "Your saved favorite books"
                : "Continue reading your favorite books"}

            </p>
          </div>

          {/* SEARCH */}
          <div className="flex items-center bg-[#1f1f1f] px-4 py-3 rounded-xl w-[320px]">

            <Search
              size={20}
              className="text-gray-400"
            />

            <input
              type="text"
              placeholder="Search books..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="bg-transparent outline-none ml-3 w-full text-white"
            />
          </div>
        </header>

        {/* BOOKS */}
        <section className="p-8">

          {displayBooks.length === 0 ? (

            <div className="text-center text-gray-400 text-2xl mt-20">
              No books found
            </div>

          ) : (

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

              {displayBooks.map((book) => {

                const isFavorite =
                  favorites.includes(book._id);

                return (
                  <div
                    key={book._id}
                    className="bg-[#1c1c1c] rounded-2xl overflow-hidden relative hover:scale-105 transition duration-300"
                  >

                    {/* FAVORITE BUTTON */}
                    <button
                      onClick={() =>
                        toggleFavorite(book._id)
                      }
                      className="absolute top-3 right-3 z-10 bg-black/60 p-2 rounded-full"
                    >

                      <Heart
                        size={20}
                        className={
                          isFavorite
                            ? "fill-red-500 text-red-500"
                            : "text-white"
                        }
                      />
                    </button>

                    {/* IMAGE */}
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-[300px] object-cover"
                    />

                    {/* CONTENT */}
                    <div className="p-4">

                      <h2 className="font-semibold text-lg line-clamp-1">
                        {book.title}
                      </h2>

                      <p className="text-gray-400 text-sm mt-1">
                        {book.author}
                      </p>

                      {/* BUTTONS */}
                      <div className="flex gap-2 mt-4">

                        {/* READ */}
                        <Link
                          href={`/read/${book._id}`}
                          className="flex-1"
                        >

                          <button className="w-full bg-[#ff9900] hover:bg-[#e68a00] text-black py-2 rounded-lg font-semibold transition">

                            Read

                          </button>
                        </Link>

                        {/* DOWNLOAD */}
                        <a
                          href={book.pdf}
                          download={`${book.title}.pdf`}
                          target="_blank"
                          className="flex-1"
                        >

                          <button className="w-full bg-[#2b2b2b] hover:bg-[#3a3a3a] border border-gray-700 text-white py-2 rounded-lg font-semibold transition">

                            Download

                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}