import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Terms & Conditions · Limitify",
  description: "Terms governing access to the Limitify website and its content.",
};

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of these terms",
    content: (
      <p>
        By accessing or using this website, you agree to these Terms & Conditions.
        If you do not agree, please do not use the site. You must have the legal
        capacity to accept these terms on your own behalf or for an organisation.
      </p>
    ),
  },
  {
    id: "website-purpose",
    title: "Website purpose",
    content: (
      <p>
        This website provides general information about Limitify and our software,
        design, and consulting services. Site content is not a binding offer or
        professional advice. Project scope, pricing, delivery, ownership, and support
        are governed by a separate written agreement with each client. If that
        agreement conflicts with these terms, the signed agreement controls.
      </p>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    content: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>Use the site unlawfully or infringe another person&apos;s rights.</li>
          <li>Attempt to disrupt, damage, probe, or gain unauthorised access to it.</li>
          <li>Introduce malicious code or use automated systems that burden the site.</li>
          <li>Misrepresent your identity or submit false or misleading information.</li>
          <li>Copy or exploit site content beyond what applicable law permits.</li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    content: (
      <p>
        Unless stated otherwise, Limitify or its licensors own the website, branding,
        text, graphics, code, and other content. We grant you a limited, revocable,
        non-exclusive right to access the site for legitimate personal or business
        evaluation. No other rights are transferred to you.
      </p>
    ),
  },
  {
    id: "submissions",
    title: "Messages and project enquiries",
    content: (
      <p>
        You remain responsible for information you submit and confirm that you have
        the right to share it. Sending an enquiry does not create a client relationship
        or confidentiality obligation. Please do not send trade secrets or highly
        sensitive information until an appropriate written agreement is in place.
      </p>
    ),
  },
  {
    id: "third-parties",
    title: "Third-party services and links",
    content: (
      <p>
        The site may link to or rely on services operated by third parties. We do not
        control their content, availability, or privacy practices and are not
        responsible for them. Your use of third-party services is governed by their
        own terms and policies.
      </p>
    ),
  },
  {
    id: "disclaimers-liability",
    title: "Disclaimers and liability",
    content: (
      <>
        <p>
          The site is provided on an “as available” basis. To the extent permitted by
          law, we make no warranties that it will always be accurate, uninterrupted,
          secure, or error-free.
        </p>
        <p>
          To the extent permitted by law, Limitify will not be liable for indirect,
          incidental, special, consequential, or lost-profit damages arising from
          use of the site. Nothing in these terms excludes liability that cannot
          legally be excluded.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law",
    content: (
      <p>
        These terms are governed by the laws of Rwanda, without regard to conflict-of-law
        rules. The courts with jurisdiction in Kigali, Rwanda will have exclusive
        jurisdiction over disputes relating to these terms, unless applicable law
        requires otherwise.
      </p>
    ),
  },
  {
    id: "changes-contact",
    title: "Changes and contact",
    content: (
      <>
        <p>
          We may update these terms from time to time. Continued use of the site after
          an update means you accept the revised terms.
        </p>
        <p>
          Questions about these terms can be sent to{" "}
          <a href="mailto:team@limitify.rw">team@limitify.rw</a>.
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      label="Legal"
      title="Terms & Conditions"
      description="These terms govern access to the Limitify website. Client projects and services are covered by their own written agreements."
      updated="7 October 2026"
      sections={sections}
    />
  );
}
