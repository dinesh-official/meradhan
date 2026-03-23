"use client";
<<<<<<< HEAD
import { useEffect, useState } from "react";

const navItems = [
=======
import { useEffect, useMemo, useState } from "react";

const allNavItems = [
>>>>>>> 9dd9dbd (Initial commit)
  { id: "personal-info", label: "Personal Information" },
  { id: "identity-docs", label: "Identity Documents" },
  { id: "pan-details", label: "PAN Details" },
  { id: "aadhaar-address", label: "Aadhaar & Address" },
  { id: "demat-accounts", label: "Demat Accounts" },
  { id: "bank-accounts", label: "Bank Accounts" },
  { id: "risk-profile", label: "Risk Profile" },
  { id: "compliance", label: "Compliance" },
];

<<<<<<< HEAD
export default function StickyHeader() {
  const [activeId, setActiveId] = useState("");

=======
export default function StickyHeader({
  hideAadhaarSection = false,
}: {
  /** When KYC used existing KRA, Aadhaar UI is hidden — skip nav anchor */
  hideAadhaarSection?: boolean;
}) {
  const [activeId, setActiveId] = useState("");

  const navItems = useMemo(
    () =>
      hideAadhaarSection
        ? allNavItems.filter((i) => i.id !== "aadhaar-address")
        : allNavItems,
    [hideAadhaarSection],
  );

>>>>>>> 9dd9dbd (Initial commit)
  useEffect(() => {
    // Ensure we're on the client side
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    const options = {
      root: null,
      rootMargin: "0px 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
<<<<<<< HEAD
  }, []);
=======
  }, [navItems]);
>>>>>>> 9dd9dbd (Initial commit)

  return (
    <div className="-top-8 z-40 sticky flex flex-row justify-start items-center gap-7 bg-white px-7 pt-4 lg:pt-0 border border-gray-100 rounded-lg w-full h-11 overflow-auto text-gray-700 text-nowrap select-none">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`font-medium text-xs transition-all cursor-pointer ${
            activeId === item.id
              ? "text-primary"
              : "hover:text-primary"
          }`}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
