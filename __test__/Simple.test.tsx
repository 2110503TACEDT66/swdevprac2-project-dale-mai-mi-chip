import { render, screen, waitFor } from "@testing-library/react";
import Reservation from "@/components/Reservation";

describe("Reservation", () => {
  it("should have button text", () => {
    render(<Reservation />);
    const button = screen.getByText("BOOK NOW!");
    expect(button).toBeInTheDocument();
  });
});

// import Register from "@/app/register/page";
// describe("Reservation page", () => {
//   it("should render UserReservation and AddNewReservations components", () => {
//     render(<Register />);
//     expect(screen.getByText("CREATE AN ACCOUNT")).toBeInTheDocument();
//   });
// });
