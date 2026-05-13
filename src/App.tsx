const LINKTREE = 'https://linktr.ee/qlddodgeball'
const INSTAGRAM = 'https://www.instagram.com/queenslanddodgeball/'
const FACEBOOK =
  'https://www.facebook.com/profile.php?id=61573353067690'
const MEMBERSHIP_FORM =
  'https://docs.google.com/forms/d/e/1FAIpQLSd8YKNRB5a0YLPShFXZ_JT5GVr6-htbZecz2cH9TzayGaX-MA/viewform?pli=1'
const FOAM_TRIALS_FORM =
  'https://docs.google.com/forms/d/e/1FAIpQLSf7Y2b2pAfA_4xI2VsJei7NmSh7qzAN5q8mUvEbUe3sMrAzWQ/viewform'
const DOUBLES_TRYBOOKING =
  'https://www.trybooking.com/events/landing/1552761'

/** Files in `public/` — must use BASE_URL so paths work on GitHub Pages (`/repo/...`). */
function publicAsset(file: string): string {
  const name = file.startsWith('/') ? file.slice(1) : file
  const base = import.meta.env.BASE_URL
  const prefix = base.endsWith('/') ? base : `${base}/`
  return `${prefix}${name}`
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-qda-ink/70 backdrop-blur">
      <div className="container-pad flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={publicAsset('logo.avif')}
            alt="Queensland Dodgeball Association"
            className="h-9 w-9 rounded-xl bg-white/5 object-contain p-1 ring-1 ring-white/10"
          />
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight text-white">
              Queensland Dodgeball
            </div>
            <div className="text-xs text-white/70">Association Inc (QDA)</div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#events" className="hover:text-white">
            Events
          </a>
          <a href="#get-involved" className="hover:text-white">
            Get involved
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            className="btn-ghost hidden sm:inline-flex"
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            className="btn-ghost hidden sm:inline-flex"
            href={FACEBOOK}
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a className="btn-ghost hidden sm:inline-flex" href="#events">
            Event details
          </a>
          <a
            className="btn-primary"
            href={MEMBERSHIP_FORM}
            target="_blank"
            rel="noreferrer"
          >
            Membership
          </a>

          <details className="relative md:hidden">
            <summary className="btn-ghost cursor-pointer list-none px-3 py-2 text-sm">
              Menu
            </summary>
            <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border border-white/10 bg-qda-ink/95 shadow-soft backdrop-blur">
              <div className="flex flex-col p-2 text-sm text-white/85">
                <a className="rounded-xl px-3 py-2 hover:bg-white/10" href="#about">
                  About
                </a>
                <a className="rounded-xl px-3 py-2 hover:bg-white/10" href="#events">
                  Events
                </a>
                <a
                  className="rounded-xl px-3 py-2 hover:bg-white/10"
                  href="#get-involved"
                >
                  Get involved
                </a>
                <a
                  className="mt-1 rounded-xl px-3 py-2 hover:bg-white/10"
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <a
                  className="rounded-xl px-3 py-2 hover:bg-white/10"
                  href={FACEBOOK}
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
                <a
                  className="mt-1 rounded-xl bg-qda-maroon-700 px-3 py-2 font-semibold text-white hover:bg-qda-maroon-600"
                  href={MEMBERSHIP_FORM}
                  target="_blank"
                  rel="noreferrer"
                >
                  Membership form
                </a>
                <a
                  className="mt-1 rounded-xl border border-white/15 bg-white/5 px-3 py-2 font-semibold text-white hover:bg-white/10"
                  href={FOAM_TRIALS_FORM}
                  target="_blank"
                  rel="noreferrer"
                >
                  Foam trials form
                </a>
                <a
                  className="mt-1 rounded-xl px-3 py-2 text-white/75 hover:bg-white/10 hover:text-white"
                  href={LINKTREE}
                  target="_blank"
                  rel="noreferrer"
                >
                  Linktree
                </a>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  )
}

function SectionHeading(props: { title: string; body: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center lg:max-w-3xl">
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {props.title}
      </h2>
      <p className="mt-3 text-pretty text-white/75 lg:text-lg">{props.body}</p>
    </div>
  )
}

function App() {
  return (
    <div id="top" className="min-h-dvh bg-stadium-glow">
      <Nav />

      <main>
        <section className="relative overflow-hidden pt-16">
          <div className="absolute inset-0 -z-10">
            <video
              className="h-full w-full object-cover object-center opacity-55 md:object-top"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={publicAsset('logo.avif')}
            >
              <source src={publicAsset('hero.mp4')} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-qda-ink/55 via-qda-ink/75 to-qda-ink"></div>
            <div className="absolute inset-0 bg-grain [background-size:18px_18px] opacity-40"></div>
          </div>

          <div className="container-pad py-12 sm:py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center lg:max-w-5xl">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Queensland Dodgeball Association
              </h1>
              <p className="mt-4 text-pretty text-base text-white/80 sm:text-lg lg:text-xl">
                The home of dodgeball in QLD—supporting clubs, running events,
                developing athletes, and growing the sport across the state.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a className="btn-primary w-full sm:w-auto" href="#events">
                  View events
                </a>
                <a
                  className="btn-ghost w-full sm:w-auto"
                  href={MEMBERSHIP_FORM}
                  target="_blank"
                  rel="noreferrer"
                >
                  2026 Membership
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3 lg:mt-12 lg:gap-4">
                <div className="card px-5 py-4 text-left">
                  <div className="text-sm font-semibold lg:text-base">Community-first</div>
                  <div className="mt-1 text-sm text-white/70 lg:text-base">
                    Inclusive, safe, and welcoming for all experience levels.
                  </div>
                </div>
                <div className="card px-5 py-4 text-left">
                  <div className="text-sm font-semibold lg:text-base">Athlete pathway</div>
                  <div className="mt-1 text-sm text-white/70 lg:text-base">
                    Supporting development from social leagues through to
                    representative teams.
                  </div>
                </div>
                <div className="card px-5 py-4 text-left">
                  <div className="text-sm font-semibold lg:text-base">Elite events</div>
                  <div className="mt-1 text-sm text-white/70 lg:text-base">
                    Quality competitions that showcase the best of the sport.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-white/10 py-14 sm:py-16">
          <div className="container-pad">
            <SectionHeading
              title="Built for the sport. Backed by the community."
              body="Queensland Dodgeball Association Inc (QDA) is the official state governing body of dodgeball in Queensland and a proud affiliate of Dodgeball Australia and the WDBF."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="card p-6">
                <div className="text-sm font-semibold">Governance</div>
                <p className="mt-2 text-sm text-white/75">
                  Clear standards, transparent administration, and best-practice
                  operations for clubs and competitions.
                </p>
              </div>
              <div className="card p-6">
                <div className="text-sm font-semibold">Competition</div>
                <p className="mt-2 text-sm text-white/75">
                  Well-run events that are fast, fair, and fun—designed for
                  players, teams, and spectators.
                </p>
              </div>
              <div className="card p-6">
                <div className="text-sm font-semibold">Development</div>
                <p className="mt-2 text-sm text-white/75">
                  Coaching, officiating, and athlete support—so Queensland
                  dodgeball keeps getting stronger.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="events" className="border-t border-white/10 py-14 sm:py-16">
          <div className="container-pad">
            <SectionHeading
              title="Events"
              body="View the latest events from Queensland Dodgeball Association."
            />

            <div className="mt-10 space-y-10">
              <div className="card overflow-hidden p-7 sm:p-10">
                <h3 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  ADCS 2026 — Australian Dodgeball Championships (States)
                </h3>
                <p className="mt-3 text-white/75">
                  Get the key details below and register via the official forms.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs font-semibold text-white/70">
                      Venue
                    </div>
                    <div className="mt-1 text-sm font-semibold">
                      Nissan Arena
                    </div>
                    <div className="mt-1 text-sm text-white/70">
                      590 Mains Road, Nathan QLD 4111
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs font-semibold text-white/70">
                      Dates
                    </div>
                    <div className="mt-1 text-sm font-semibold">
                      July 4–5, 2026
                    </div>
                    <div className="mt-1 text-sm text-white/70">
                      Saturday & Sunday
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-xs font-semibold text-white/70">
                    Why you’ll love ADCS
                  </div>
                  <ul className="mt-4 space-y-3 text-sm text-white/80">
                    <li className="flex gap-3">
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-qda-maroon-600"></span>
                      Fast-paced dodgeball across the nation’s best state squads.
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-qda-maroon-600"></span>
                      A flagship weekend for players, coaches, and supporters.
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-qda-maroon-600"></span>
                      Professional venue, high energy, great spectator vibe.
                    </li>
                  </ul>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    className="btn-primary"
                    href={FOAM_TRIALS_FORM}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Foam trials registration
                  </a>
                  <a
                    className="btn-ghost"
                    href={MEMBERSHIP_FORM}
                    target="_blank"
                    rel="noreferrer"
                  >
                    2026 membership
                  </a>
                </div>
              </div>

              <div className="card overflow-hidden p-7 sm:p-10">
                <h3 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Doubles tournament — Dodgeball Doubles
                </h3>
                <p className="mt-3 text-sm text-white/75 sm:text-base">
                  A fast 2v2 format with Mixed, Men’s, and Women’s divisions—teams
                  of up to three players with two on court, half-width courts for
                  quicker play, and three balls with WDBF rules adapted for doubles.
                  Top three teams and an MVP per division receive medals and
                  prizes; full university-student teams can access a 50%
                  registration discount via the organisers. Full pricing and the
                  uni discount process are on TryBooking.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs font-semibold text-white/70">
                      Venue
                    </div>
                    <div className="mt-1 text-sm font-semibold">
                      Somerville House Aquatic Centre
                    </div>
                    <div className="mt-1 text-sm text-white/70">
                      4 Stephens Road, South Brisbane QLD 4101
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs font-semibold text-white/70">
                      Date
                    </div>
                    <div className="mt-1 text-sm font-semibold">
                      Saturday 30 May 2026
                    </div>
                    <div className="mt-1 text-sm text-white/70">
                      8:15am – 5:00pm (AEST)
                    </div>
                  </div>
                </div>

                <div className="mt-7">
                  <a
                    className="btn-primary"
                    href={DOUBLES_TRYBOOKING}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="get-involved"
          className="border-t border-white/10 py-14 sm:py-16"
        >
          <div className="container-pad">
            <SectionHeading
              title="Membership, trials & registrations"
              body="Use the official QDA forms for 2026 membership and ADCS registrations."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <div className="card p-7">
                <div className="text-sm font-semibold">
                  Queensland Dodgeball 2026 Membership
                </div>
                <p className="mt-2 text-sm text-white/75">
                  Become a member and stay connected with Queensland dodgeball
                  events, pathways, and updates.
                </p>
                <div className="mt-5">
                  <a
                    className="btn-primary w-full sm:w-auto"
                    href={MEMBERSHIP_FORM}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Membership signup
                  </a>
                </div>
              </div>

              <div className="card p-7">
                <div className="text-sm font-semibold">
                  ADCS 2026 QLD Foam Team Trials
                </div>
                <p className="mt-2 text-sm text-white/75">
                  Register and pay for the QLD Foam Team Trials sessions via the
                  official form.
                </p>
                <div className="mt-5">
                  <a
                    className="btn-primary w-full sm:w-auto"
                    href={FOAM_TRIALS_FORM}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Register now
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10" />
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="container-pad flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-3">
            <img
              src={publicAsset('logo.avif')}
              alt=""
              className="h-9 w-9 rounded-xl bg-white/5 object-contain p-1 ring-1 ring-white/10"
            />
            <div className="text-sm">
              <div className="font-semibold">Queensland Dodgeball Association</div>
              <div className="text-white/60">Brisbane, Queensland</div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-end">
              <a
                className="text-sm font-semibold text-white/80 hover:text-white"
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                className="text-sm font-semibold text-white/80 hover:text-white"
                href={FACEBOOK}
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              <a
                className="text-sm font-semibold text-white/80 hover:text-white"
                href={LINKTREE}
                target="_blank"
                rel="noreferrer"
              >
                Linktree
              </a>
              <a
                className="text-sm font-semibold text-white/80 hover:text-white"
                href={MEMBERSHIP_FORM}
                target="_blank"
                rel="noreferrer"
              >
                Membership
              </a>
              <a
                className="text-sm font-semibold text-white/80 hover:text-white"
                href={FOAM_TRIALS_FORM}
                target="_blank"
                rel="noreferrer"
              >
                Foam trials
              </a>
            </div>
            <div className="text-xs text-white/55">
              © {new Date().getFullYear()} Queensland Dodgeball Association Inc.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
