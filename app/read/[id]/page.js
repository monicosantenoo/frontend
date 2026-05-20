"use client";

import axios from "axios";

import {
  ArrowLeft,
  Download,
  Expand,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
  useRouter,
} from "next/navigation";

export default function ReadBook() {

  const params = useParams();

  const router = useRouter();

  // BOOK STATE
  const [book, setBook] =
    useState(null);

  // FETCH BOOK
  useEffect(() => {

    fetchBook();

  }, []);

  const fetchBook = async () => {

    try {

      const res = await axios.get(
        `http://localhost:5000/api/books/${params.id}`
      );

      setBook(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  // FULLSCREEN
  const openFullscreen = () => {

    const iframe =
      document.getElementById(
        "pdf-reader"
      );

    if (iframe.requestFullscreen) {

      iframe.requestFullscreen();
    }
  };

  // LOADING
  if (!book) {

    return (
      <div className="min-h-screen bg-black flex items-center justify-center">

        <div className="text-white text-3xl animate-pulse">
          Opening Book...
        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">

      {/* TOP NAVBAR */}
      <header className="h-[70px] bg-[#111] border-b border-gray-800 flex items-center justify-between px-6">

        {/* LEFT */}
        <div className="flex items-center gap-4">

          {/* BACK */}
          <button
            onClick={() =>
              router.push("/library")
            }
            className="bg-[#1f1f1f] hover:bg-[#2a2a2a] px-4 py-2 rounded-lg transition flex items-center gap-2"
          >

            <ArrowLeft size={18} />
            Back

          </button>

          {/* TITLE */}
          <h1 className="text-2xl font-bold">
            {book.title}
          </h1>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          {/* DOWNLOAD */}
          <a
            href={book.pdf}
            download
            className="bg-[#ff9900] hover:bg-[#e68a00] text-black font-semibold px-4 py-2 rounded-lg transition flex items-center gap-2"
          >

            <Download size={18} />
            Download

          </a>

          {/* FULLSCREEN */}
          <button
            onClick={openFullscreen}
            className="bg-[#1f1f1f] hover:bg-[#2a2a2a] px-4 py-2 rounded-lg transition flex items-center gap-2"
          >

            <Expand size={18} />
            Fullscreen

          </button>
        </div>
      </header>

      {/* PDF READER */}
      <iframe
        id="pdf-reader"
        src={`${book.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
        className="w-full h-[calc(100vh-70px)] bg-[#222]"
      />
    </div>
  );
}