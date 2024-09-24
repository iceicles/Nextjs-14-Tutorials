/**
 * Parallel Routes
 * An advanced routing mechanism that allows for the simultaneous rendering of multiple pages within teh same layout
 * Parallel routes are defined using a feature known as slots
 * Slots help structure our content in a modular fashion
 * To define a slot, we use the '@folder' naming convention
 * Each slot is then passed as a prop to its corresponding 'layout.tsx' file
 *
 *
 * Note: 'children' is also a slot like - complex-dashboard/@children/page.tsx
 * Parallel Routes Benefits --
 * -> Ability to split a single layout into various slots, making the code more manageable
 * -> Independent route handling
 * --> each slot of your layout, such as user analytics or revenue metrics, can have its own loading and error states
 * --> this granular control is particularly beneficial in scenarios where different sections of the page load at varying speeds or encounter unique errors
 * -> Sub-navigation
 * --> each slot of your dashboard can essentially function as a mini-app complete with its own navigation and state management
 * --> this is especially u seful in a complex app such as our dashboard where different sections serve distinct purposes
 */

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: 'flex', flex: 1 }}>{notifications}</div>
      </div>
    </div>
  ) : (
    login
  );
}
