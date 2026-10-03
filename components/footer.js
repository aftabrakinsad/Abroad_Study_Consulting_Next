export default function Footer()
{
    return (
        <footer className="border-t border-gray-700 bg-gray-800">
            <div className="mx-auto max-w-screen-xl px-4 py-6">
                <p className="text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} Abroad Study™. All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}
