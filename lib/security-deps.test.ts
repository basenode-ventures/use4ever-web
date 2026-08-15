import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

type Lockfile = {
  packages: Record<string, { version?: string }>;
};

function lockVersion(name: string) {
  const lock = JSON.parse(readFileSync("package-lock.json", "utf8")) as Lockfile;
  const version = lock.packages[`node_modules/${name}`]?.version;
  if (!version) {
    throw new Error(`missing ${name} in package-lock.json`);
  }
  return version;
}

function parseVersion(version: string) {
  const [major, minor, patch] = version.split(".").map((part) => Number(part.split("-")[0]));
  return { major, minor, patch };
}

describe("patched dependency floors", () => {
  it("keeps Next.js on 16.3.1+ so React2Shell and nested postcss/sharp advisories stay closed", () => {
    const { major, minor, patch } = parseVersion(lockVersion("next"));
    expect(major).toBeGreaterThanOrEqual(16);
    if (major === 16 && minor === 3) {
      expect(patch).toBeGreaterThanOrEqual(1);
    }
    if (major === 16) {
      expect(minor).toBeGreaterThanOrEqual(3);
    }
  });

  it("keeps React on a React2Shell-patched 19.2.x", () => {
    const { major, minor, patch } = parseVersion(lockVersion("react"));
    expect(major).toBe(19);
    expect(minor).toBeGreaterThanOrEqual(2);
    if (minor === 2) {
      expect(patch).toBeGreaterThanOrEqual(1);
    }
  });
});
