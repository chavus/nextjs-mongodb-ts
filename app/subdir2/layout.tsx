export default function Subdir2Layout({
    children,
  }: {
    children: React.ReactNode,
  }) {
    return (
        <>  
            <h2>subdir2 layout</h2>
            <section>{children}</section>
        </>
    );
  }