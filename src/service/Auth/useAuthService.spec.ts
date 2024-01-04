import { renderHook } from "@testing-library/react";
import { useAuthService } from "./useAuthService";

describe("useAuthService", () => {
  test("should ", () => {
    const { result } = renderHook(useAuthService);
    expect(result.current.login).toBeInstanceOf(Function);
  });
});
