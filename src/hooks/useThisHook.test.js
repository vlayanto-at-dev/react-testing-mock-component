import { renderHook } from "@testing-library/react-hooks";

import { useThisHook } from "./useThisHook";

describe("useThisHook", () => {
  test("new test", () => {
    const { result, rerender } = renderHook(({ value }) => useThisHook(value), {
      initialProps: {
        value: [
          { id: 1, ok: true },
          { id: 2, ok: false },
        ],
      },
    });

    expect(result.current.value).toEqual({ id: 1, ok: true });
    expect(result.current.selectedValue).toBeNull();

    result.current.updateValue();

    expect(result.current.selectedValue).toEqual({ id: 2, ok: false });

    rerender({
      value: [
        { id: 2, ok: false },
        { id: 1, ok: true },
      ]
    });

    expect(result.current.value).toEqual({ id: 2, ok: false });
    result.current.updateValue();
    expect(result.current.selectedValue).toEqual({ id: 2, ok: false });
  });
});
