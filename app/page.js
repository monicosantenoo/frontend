// app/page.jsx

import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* HERO SECTION */}
     <header
        className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white flex flex-col items-center justify-center px-6 text-center"
        style={{
          backgroundImage:
            "url('https://m.media-amazon.com/images/G/01/kfw/landing/img_sky_bg._CB630820936_.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col items-center">
          {/* Logo */}
          <img
            src="https://m.media-amazon.com/images/G/01/kfw/landing/img_logo2x._CB611756372_.png"
            alt="Amazon Kindle"
            className="w-[280px] p-8 md:w-[380px]"
          />

          {/* Subtitle */}
          <h2 className="text-2xl md:text-4xl font-light mt-6">
            Take your stories wherever you go
          </h2>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mt-10">
            <Link href="/signup">
              <button className="bg-[#ff9900] hover:bg-[#e68a00] px-8 py-4 rounded-full text-black font-semibold text-lg transition">
                Create an Amazon account
              </button>
            </Link>

            <Link href="/login">
              <button className="bg-white hover:bg-gray-200 px-8 py-4 rounded-full text-black font-semibold text-lg flex items-center gap-3 transition">
                <img
                  src="https://m.media-amazon.com/images/G/01/kfw/landing/icon-amazon-a2x._CB611757832_.png"
                  alt="Amazon"
                  className="w-6"
                />

                Sign in with your account
              </button>
            </Link>
          </div>

          {/* Kindle Image */}
          <img
            src="https://m.media-amazon.com/images/G/01/kfw/landing/img_kindleWeb_IN2x._CB610886625_.png"
            alt="Kindle"
            className="mt-16 w-full max-w-5xl"
          />
        </div>
      </header>

      {/* MAIN */}
      <main>
        {/* EXPLORE SECTION */}
        <section className="bg-white py-24 px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Explore what Kindle can do
          </h2>

          <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* CARD 1 */}
            <article className="text-center flex flex-col items-center">
              <img
                src="https://m.media-amazon.com/images/G/01/kfw/landing/img_books2x._CB611756466_.png"
                alt=""
                className="w-48"
              />

              <h3 className="text-2xl font-semibold mt-8">
                Millions of titles at your fingertips
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                Browse books, magazines, and comics, and sample them before you
                buy.
              </p>

              <a
                href="#"
                className="text-blue-600 mt-4"
              >
                Shop now
              </a>
            </article>

            {/* CARD 2 */}
            <article className="text-center flex flex-col items-center">
              <img
                src="https://m.media-amazon.com/images/G/01/kfw/landing/img_devices2x._CB611756541_.png"
                alt=""
                className="w-48"
              />

              <h3 className="text-2xl font-semibold mt-8">
                Read on all your devices
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                Sign in with your account to access your books and other content
                on any device.
              </p>
            </article>

            {/* CARD 3 */}
            <article className="text-center flex flex-col items-center">
              <img
                src="https://m.media-amazon.com/images/G/01/kfw/landing/img_type2x._CB611757579_.png"
                alt=""
                className="w-48"
              />

              <h3 className="text-2xl font-semibold mt-8">
                Designed for every reader
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                Customize your Kindle experience to fit your reading needs and
                preferences.
              </p>
            </article>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gray-300 my-20"></div>

          {/* FEATURES */}
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold">
                Read the way you want
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                Adjust text size, font, layout, margins, background color, and
                more so you can read comfortably.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Record notable moments
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                Make notes and highlight your favorite lines.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Search within your book
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                Search for words, phrases, or names to see where they’re
                mentioned.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Look up words while you read
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                Quickly see dictionary definitions in your book.
              </p>
            </div>
          </div>
        </section>

        {/* DISCOVER SECTION */}
        <section className="bg-gray-100 py-24 px-6 text-center">
          <h2 className="text-4xl font-bold">
            Discover ways to read
          </h2>

          <p className="text-xl text-gray-600 mt-6">
            Read on read.amazon.in or download Kindle on any device.
          </p>

          <p className="text-lg text-gray-500 mt-4">
            Kindle Cloud Reader is now known as Kindle for Web.
          </p>

          {/* APP STORE */}
          <div className="flex flex-wrap justify-center gap-6 mt-14">
            <img
              src="https://m.media-amazon.com/images/G/01/kfw/landing/img_appStore_EN2x._CB611826489_.png"
              alt="App Store"
              className="h-16"
            />

            <img
              src="https://m.media-amazon.com/images/G/01/kfw/landing/img_googlePlay_EN2x._CB611827643_.png"
              alt="Play Store"
              className="h-16"
            />

            <img
              src="https://m.media-amazon.com/images/G/01/kfw/landing/img_pc_EN2x._CB1760075018_.png"
              alt="PC"
              className="h-16"
            />
          </div>

          <p className="mt-10">
            <a
              href="#"
              className="text-blue-600"
            >
              Learn more about the Kindle app
            </a>
          </p>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gray-300 my-20"></div>

          {/* GET STARTED */}
          <h2 className="text-4xl font-bold mb-10">
            Get started with Kindle
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-[#ff9900] hover:bg-[#e68a00] px-8 py-4 rounded-full text-black font-semibold text-lg">
              Create an Amazon account
            </button>

            <button className="bg-white hover:bg-gray-200 px-8 py-4 rounded-full text-black font-semibold text-lg flex items-center justify-center gap-3">
              <img
                src="https://m.media-amazon.com/images/G/01/kfw/landing/icon-amazon-a._CB611757832_.png"
                alt="Amazon"
                className="w-6"
              />

              Sign in with your account
            </button>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#131A22] text-white py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm">
            © 1996-2026, Amazon.com, Inc. or its affiliates.
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#">Terms of use</a>
            <a href="#">Legal notices</a>
            <a href="#">Privacy notice</a>
            <a href="#">Help</a>
          </div>
        </div>
      </footer>
    </div>
  );
}