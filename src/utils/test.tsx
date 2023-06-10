import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";

function renderWithRouter(children: ReactNode) {
  return render(<MemoryRouter>{children}</MemoryRouter>);
}

export { renderWithRouter };
