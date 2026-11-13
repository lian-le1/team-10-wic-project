import { useState, type FormEvent } from 'react'
import arrowRightIcon from '../assets/icons/arrow-right.svg'
import shieldCheckIcon from '../assets/icons/shield-check-cornflower.svg'
import squareCheckIcon from '../assets/icons/square-check.svg'
import usersIcon from '../assets/icons/users.svg'
import familyPhoto from '../assets/images/family-laptop.png'
import Logo from '../components/Logo'
import { Button } from '../components/ui/Button'
import Chip from '../components/ui/Chip'
import Icon from '../components/ui/Icon'
import TextField from '../components/ui/TextField'
import { cn } from '../lib/cn'

// Placeholder data until Supabase auth and family lookup exist.
const sampleAccount = {
  fullName: 'Sophie Lane',
  email: 'sophie.lane@example.com',
  password: 'sunny-garden-26',
  inviteCode: 'MORGAN-26',
}

const sampleFamilies: Record<string, { name: string; coordinator: string }> = {
  'MORGAN-26': { name: 'Morgan family', coordinator: 'Emma Morgan' },
  'LANE-14': { name: 'Lane family', coordinator: 'Grace Lane' },
}

type Mode = 'join' | 'create'

export default function JoinPage() {
  return (
    <div className="flex min-h-screen flex-col bg-canvas lg:flex-row">
      <WelcomePanel />
      <main className="flex flex-1 justify-center px-5 py-8 md:px-10 lg:px-27.5 lg:py-11">
        <RegistrationForm />
      </main>
    </div>
  )
}

function WelcomePanel() {
  return (
    <aside className="flex flex-col gap-8 border-mint-line bg-mint-100 px-5 py-8 md:px-10 lg:w-150 lg:shrink-0 lg:gap-10 lg:border-r lg:p-14">
      <Logo onMint />

      <div className="flex flex-col gap-5 rounded-panel bg-mint-50 pt-6">
        <p className="text-headline-sm font-extrabold text-ink text-shadow-glow lg:text-headline-xl">
          Good care starts <br className="hidden sm:inline" />
          with good company.
        </p>
        <p className="text-body-xl font-semibold text-primary">Take care of your loved ones from your fingertips</p>
      </div>

      <img
        src={familyPhoto}
        alt="An older couple laughing together while looking at a laptop"
        className="hidden aspect-488/390 w-full rounded-card border border-mint-line object-cover md:block"
      />

      <div className="flex items-center gap-3 rounded-notice border border-cornflower-300 bg-cornflower-50 p-4">
        <Icon src={shieldCheckIcon} />
        <p className="text-caption leading-[1.6] font-semibold text-cornflower-700">
          A private space for the people who matter most.
          <br />
          Your family approves every new member.
        </p>
      </div>
    </aside>
  )
}

function RegistrationForm() {
  const [mode, setMode] = useState<Mode>('join')
  const [inviteCode, setInviteCode] = useState(sampleAccount.inviteCode)
  const [agreed, setAgreed] = useState(true)

  const family = sampleFamilies[inviteCode.trim().toUpperCase()]

  // No backend yet, so submitting does nothing beyond the browser's own validation.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className="flex w-full max-w-110 flex-col gap-7 lg:max-w-none">
      <p className="flex justify-end gap-2 border-b border-mint-divider pb-3 text-caption">
        <span className="font-semibold text-primary">Already part of CareCapsule?</span>
        {/* No sign-in page yet; wire this up once auth exists. */}
        <button
          type="button"
          className="rounded-sm font-bold text-cobalt underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Sign in
        </button>
      </p>

      <div className="flex flex-col items-start gap-3 rounded-panel bg-mint-50 pt-5">
        <Chip className="whitespace-pre">
          {'01  ACCOUNT & FAMILY'}
        </Chip>
        <h1 className="text-title-lg font-extrabold text-ink text-shadow-glow sm:text-headline-sm sm:leading-normal">
          Your people are waiting.
        </h1>
        <p className="text-body leading-[1.6] font-semibold text-primary">
          {mode === 'join'
            ? "Create your account and ask to join your family's space."
            : 'Create your account and start a new family space.'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-7">
        <div className="flex flex-col gap-4">
          <TextField label="Full name" name="fullName" autoComplete="name" required defaultValue={sampleAccount.fullName} />
          <TextField
            label="Email address"
            name="email"
            type="email"
            autoComplete="email"
            required
            defaultValue={sampleAccount.email}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            autoComplete="new-password"
            minLength={12}
            required
            defaultValue={sampleAccount.password}
            hint="At least 12 characters. Make it something only you know."
          />
        </div>

        <div className="flex flex-col gap-4">
          <FamilyModeSwitch mode={mode} onChange={setMode} />

          {mode === 'join' ? (
            <>
              <TextField
                label="Family invitation code"
                name="inviteCode"
                autoComplete="off"
                required
                value={inviteCode}
                onChange={(event) => setInviteCode(event.target.value)}
              />
              <div aria-live="polite">
                {family ? (
                  <p className="flex items-center gap-2.5 rounded-brand-sm border border-mint-line bg-mint-100 p-3.5 text-caption font-bold text-cobalt">
                    <Icon src={usersIcon} />
                    {family.name} · Coordinator: {family.coordinator}
                  </p>
                ) : (
                  inviteCode.trim() && (
                    <p className="text-eyebrow font-semibold text-ink-muted">
                      We couldn't find a family with that code. Check it with your family coordinator.
                    </p>
                  )
                )}
              </div>
            </>
          ) : (
            <TextField label="Family name" name="familyName" required placeholder="e.g. Lane family" />
          )}
        </div>

        <label className="flex cursor-pointer items-center gap-2.5 rounded-notice bg-mint-50 p-4 text-caption leading-[1.6] font-semibold text-primary has-focus-visible:outline-2 has-focus-visible:outline-primary">
          <input
            type="checkbox"
            name="terms"
            required
            checked={agreed}
            onChange={(event) => setAgreed(event.target.checked)}
            className="sr-only"
          />
          {agreed ? (
            <Icon src={squareCheckIcon} />
          ) : (
            <span aria-hidden="true" className="m-0.75 size-3 shrink-0 rounded-[3px] border-[1.7px] border-primary" />
          )}
          <span>
            I agree to the Terms and Privacy Policy
            {mode === 'join' ? ', and understand my family coordinator will review my request.' : '.'}
          </span>
        </label>

        <Button
          type="submit"
          size="lg"
          className="w-full"
          icon={<Icon src={arrowRightIcon} />}
        >
          {mode === 'join' ? 'Create account & send request' : 'Create account & family'}
        </Button>
      </form>
    </div>
  )
}

/** Two-option toggle between joining an existing family and creating a new one. */
function FamilyModeSwitch({ mode, onChange }: { mode: Mode; onChange: (mode: Mode) => void }) {
  const options: { value: Mode; label: string }[] = [
    { value: 'join', label: 'Join a family' },
    { value: 'create', label: 'Create a family' },
  ]

  return (
    <div
      role="radiogroup"
      aria-label="Family"
      className="flex h-11.5 gap-1 rounded-brand-sm border border-mint-line bg-mint-50 p-1"
    >
      {options.map((option) => {
        const selected = mode === option.value
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(option.value)}
            className={cn(
              'flex-1 rounded-segment text-caption font-bold transition',
              'focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary',
              selected ? 'border border-mint-line bg-white text-primary' : 'text-cobalt hover:bg-white/60',
            )}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
