"use client";

export default function IntroLines() {
  return (
    <div className="absolute inset-0 z-30 pointer-events-none">
      <div className="absolute left-1/2 top-[34%] w-[min(28vw,420px)] -translate-x-1/2 -translate-y-1/2 md:left-[54%]">
        <div className="relative">
          <svg
            className="stone-outline h-auto w-full overflow-visible"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="stone-path"
              d="M84 54C68 54 56 66 56 82V418C56 434 68 446 84 446H416C432 446 444 434 444 418V82C444 66 432 54 416 54H84Z"
            />
            <path
              className="stone-path"
              d="M132 135C132 116 147 101 166 101H334C353 101 368 116 368 135V365C368 384 353 399 334 399H166C147 399 132 384 132 365V135Z"
            />
            <path
              className="stone-path"
              d="M178 162C162 180 159 217 159 255C159 311 176 353 205 353C230 353 244 323 244 270V160"
            />
            <path
              className="stone-path"
              d="M249 152C300 162 337 202 337 252C337 309 296 352 237 352"
            />
            <path
              className="stone-path"
              d="M247 173C281 182 307 210 307 248C307 291 278 320 235 327"
            />
            <path
              className="stone-path"
              d="M340 156V350H395"
            />
          </svg>

          <div className="light-sweep lines-sweep" />
        </div>
      </div>
    </div>
  );
}
