<header className="fixed inset-x-0 top-0 z-50">
  <div className="relative px-5 py-5 md:px-8 md:py-6">

    {/* BASE DA BARRA */}
    <div className="absolute inset-0 bg-[rgba(138,115,87,0.42)] backdrop-blur-[14px]" />

    {/* CAMADA DE LUZ (refinamento Apple) */}
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(234,227,214,0.22)_0%,rgba(234,227,214,0.06)_100%)]" />

    {/* BORDA INFERIOR SUTIL */}
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-[rgba(234,227,214,0.18)]" />

    <div className="relative flex items-center justify-between">

      {/* LOGO */}
      <Link href="/" className="block">
        <Image
          src="/logo-header.png"
          alt="Amato Lima"
          width={900}
          height={260}
          priority
          className="h-auto w-[220px] md:w-[300px] object-contain opacity-95"
        />
      </Link>

      {/* MENU */}
      <button
        onClick={() => setOpen(true)}
        className="group relative flex h-12 w-12 items-center justify-center"
        aria-label="Abrir menu"
      >
        <span className="flex flex-col items-end gap-[8px] transition-all duration-300">
          <span className="h-[2.4px] w-10 rounded-full bg-[#F3EBDD] transition-all group-hover:w-12" />
          <span className="h-[2.4px] w-7 rounded-full bg-[#F3EBDD] transition-all group-hover:w-10" />
        </span>
      </button>

    </div>
  </div>
</header>
