import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
    return (
        <header className="hero text-center text-[var(--docsearch-text-color)] relative overflow-hidden bg-[var(--docsearch-searchbox-background)] max-[996px]:p-8">
            <div className="container">
                <div className="flex justify-center items-center"><h1 className="text-[50px] max-[830px]:text-[35px] max-[355px]:text-[25px]">Streamline with Ambush.</h1></div>
                <div className="flex justify-center items-center mt-1.5"><p className="text-base w-[45em]">Ambush is a minimal library that brings plenty of handy utilities to your code. Ambush prioritizes performance and is tailored to enhance your development experience while keeping things lean and efficient.</p></div>

                <div className="flex justify-center items-center">
                    <button className="mt-2.5 flex font-mono gap-2 place-items-center rounded h-11 text-base font-semibold text-gray-800 bg-[#ececec] cursor-copy leading-none select-none border px-6 hover:border-2" onClick={() => navigator.clipboard.writeText('npm install ambush')}>
                        <span className="text-[#ff2424]">&gt;</span>
                        <span>npm install ambush</span>

                        <svg stroke="#000" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                    </button>
                </div>

                <div className="flex justify-center items-center flex-wrap mt-[25px]">
                    <a href="https://github.com/ambushjs/ambush" className="mr-0.5 mb-[0.1rem]">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="115" height="28" role="img">
                            <g shapeRendering="crispEdges">
                                <rect width="93.75" height="28" fill="#555" />
                                <rect x="79" width="34.25" height="28" fill="#2e2e2e" />
                            </g>
                            <g fill="#fff" textAnchor="middle" fontFamily="Verdana,Geneva,DejaVu Sans,sans-serif" textRendering="geometricPrecision" fontSize="100">
                                <text transform="scale(.1)" x="400" y="175" textLength="527.5" fill="#fff">MADE IN</text>
                                <image x="88.9" y="7" width="14" height="14" xlinkHref="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZXNtb2tlIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+R2l0SHViPC90aXRsZT48cGF0aCBkPSJNMTIgLjI5N2MtNi42MyAwLTEyIDUuMzczLTEyIDEyIDAgNS4zMDMgMy40MzggOS44IDguMjA1IDExLjM4NS42LjExMy44Mi0uMjU4LjgyLS41NzcgMC0uMjg1LS4wMS0xLjA0LS4wMTUtMi4wNC0zLjMzOC43MjQtNC4wNDItMS42MS00LjA0Mi0xLjYxQzQuNDIyIDE4LjA3IDMuNjMzIDE3LjcgMy42MzMgMTcuN2MtMS4wODctLjc0NC4wODQtLjcyOS4wODQtLjcyOSAxLjIwNS4wODQgMS44MzggMS4yMzYgMS44MzggMS4yMzYgMS4wNyAxLjgzNSAyLjgwOSAxLjMwNSAzLjQ5NS45OTguMTA4LS43NzYuNDE3LTEuMzA1Ljc2LTEuNjA1LTIuNjY1LS4zLTUuNDY2LTEuMzMyLTUuNDY2LTUuOTMgMC0xLjMxLjQ2NS0yLjM4IDEuMjM1LTMuMjItLjEzNS0uMzAzLS41NC0xLjUyMy4xMDUtMy4xNzYgMCAwIDEuMDA1LS4zMjIgMy4zIDEuMjMuOTYtLjI2NyAxLjk4LS4zOTkgMy0uNDA1IDEuMDIuMDA2IDIuMDQuMTM4IDMgLjQwNSAyLjI4LTEuNTUyIDMuMjg1LTEuMjMgMy4yODUtMS4yMy42NDUgMS42NTMuMjQgMi44NzMuMTIgMy4xNzYuNzY1Ljg0IDEuMjMgMS45MSAxLjIzIDMuMjIgMCA0LjYxLTIuODA1IDUuNjI1LTUuNDc1IDUuOTIuNDIuMzYuODEgMS4wOTYuODEgMi4yMiAwIDEuNjA2LS4wMTUgMi44OTYtLjAxNSAzLjI4NiAwIC4zMTUuMjEuNjkuODI1LjU3QzIwLjU2NSAyMi4wOTIgMjQgMTcuNTkyIDI0IDEyLjI5N2MwLTYuNjI3LTUuMzczLTEyLTEyLTEyIi8+PC9zdmc+" />
                            </g>
                        </svg>
                    </a>
                    <a href="https://github.com/ambushjs/ambush" className="ml-0.5 mb-[0.1rem]">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="129.5" height="28" role="img">
                            <g shapeRendering="crispEdges">
                                <rect width="95.25" height="28" fill="#555" />
                                <rect x="95.25" width="34.25" height="28" fill="#e05d44" />
                            </g>
                            <g fill="#fff" textAnchor="middle" fontFamily="Verdana,Geneva,DejaVu Sans,sans-serif" textRendering="geometricPrecision" fontSize="100">
                                <text transform="scale(.1)" x="476.25" y="175" textLength="712.5" fill="#fff">MADE WITH</text>
                                <text transform="scale(.1)" x="1123.75" y="175" textLength="102.5" fill="#fff" fontWeight="bold">❤</text>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    return (
        <Layout title="Home" description="Official documentation of Ambush">
            <HomepageHeader />
            <main className="transition-all duration-[var(--ifm-transition-slow)] ease-[var(--ifm-transition-timing-default)]">
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
