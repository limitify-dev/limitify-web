import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Privacy & Cookie Policy · Limitify",
  description:
    "Learn how Limitify collects, uses, protects, and manages personal information.",
};

const sections: LegalSection[] = [
  {
    id: "information-we-collect",
    title: "Information we collect",
    content: (
      <>
        <p>
          We collect information you choose to provide, including your name,
          email address, company details, project information, and messages sent
          through our contact or notification forms.
        </p>
        <p>
          Our hosting and security providers may also process standard technical
          information such as your IP address, browser type, device information,
          requested pages, and timestamps when you visit the site.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    title: "How we use information",
    content: (
      <>
        <p>We use personal information to:</p>
        <ul>
          <li>Respond to enquiries and discuss potential projects.</li>
          <li>Provide, maintain, and improve our website and services.</li>
          <li>Send updates you have asked to receive.</li>
          <li>Protect the site, prevent misuse, and comply with legal duties.</li>
        </ul>
        <p>We do not sell or rent your personal information.</p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and similar technologies",
    content: (
      <>
        <p>
          Cookies are small files stored on your device. We may use essential
          cookies required for security, navigation, and core site functionality.
          If we introduce optional analytics or marketing cookies, we will provide
          any consent controls required by applicable law.
        </p>
        <p>
          You can restrict or remove cookies using your browser settings, although
          doing so may affect some site functionality.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "How information is shared",
    content: (
      <p>
        We may share information with trusted providers that help us host the
        website, deliver email, secure our systems, or operate our business. They
        may use it only to perform services for us. We may also disclose information
        when required by law, to protect rights and safety, or as part of a business
        reorganisation.
      </p>
    ),
  },
  {
    id: "retention-security",
    title: "Retention and security",
    content: (
      <>
        <p>
          We retain personal information only for as long as needed for the purpose
          for which it was collected, to maintain appropriate business records, or
          to meet legal obligations.
        </p>
        <p>
          We use reasonable organisational and technical safeguards, but no method
          of storage or transmission can be guaranteed completely secure.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your choices and rights",
    content: (
      <p>
        Depending on where you live, you may have rights to access, correct, delete,
        restrict, or object to certain uses of your personal information, and to
        withdraw consent. To make a request, email us using the address below. We
        may need to verify your identity before responding.
      </p>
    ),
  },
  {
    id: "international-children",
    title: "International use and children",
    content: (
      <>
        <p>
          Our providers may process information in countries other than your own.
          Where required, we use appropriate safeguards for those transfers.
        </p>
        <p>
          This website is intended for businesses and is not directed to children.
          We do not knowingly collect personal information from children.
        </p>
      </>
    ),
  },
  {
    id: "changes-contact",
    title: "Changes and contact",
    content: (
      <>
        <p>
          We may update this policy as our services or legal obligations change.
          The latest version will always appear on this page with its revision date.
        </p>
        <p>
          For privacy questions or requests, contact Limitify in Kigali, Rwanda at{" "}
          <a href="mailto:team@limitify.rw">team@limitify.rw</a>.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      label="Legal"
      title="Privacy & Cookie Policy"
      description="This policy explains what information Limitify collects through this website, why we use it, and the choices available to you."
      updated="7 October 2026"
      sections={sections}
    />
  );
}
