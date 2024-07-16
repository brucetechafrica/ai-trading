import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Link from "next/link";
import Image from "next/image"; // Importation du composant Image de Next.js

const InvestmentRecord = () => {
    return ( 
        <div className="pt-40 bg-gradient-to-tl from-blue-900 to-black px-28 max-[900px]:px-10 max-[752px]:px-5 w-full h-screen">
            <div className="pt-20 flex flex-col items-center gap-5 justify-center mb-10">
                <h3 className="text-white text-6xl max-[785px]:text-5xl max-[550px]:text-4xl font-semibold text-center">Investment Record</h3>
                <p className="text-center text-[14px] text-slate-400">Track your investments record to see how much you have come</p>
                <Image src="/businessman.png" alt="Businessman" width={150} height={150} /> {/* Ajout de l'image */}
            </div>
            <h3 className="text-white">No investments yet...</h3>
            <h3 className="text-white">Click <Link href="/pricing"><span className="underline text-slate-400">here</span></Link> to invest</h3>
            {/* <TableContainer>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="Investment Table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="text-slate-300">Plan</TableCell>
                            <TableCell className="text-slate-300">Amount Invested</TableCell>
                            <TableCell className="text-slate-300">Investment Date</TableCell>
                            <TableCell className="text-slate-300">Returns</TableCell>
                            <TableCell className="text-slate-300">Expected Returns Date</TableCell>
                            <TableCell className="text-slate-300">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="text-white">
                        <TableRow>
                            <TableCell className="text-white">Basic</TableCell>
                            <TableCell className="text-white">$200</TableCell>
                            <TableCell className="text-white">26-07-23</TableCell>
                            <TableCell className="text-white">$300</TableCell>
                            <TableCell className="text-white">09-08-23</TableCell>
                            <TableCell className="text-white">Paid</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-white">Standard</TableCell>
                            <TableCell className="text-white">$500</TableCell>
                            <TableCell className="text-white">04-08-23</TableCell>
                            <TableCell className="text-white">$875</TableCell>
                            <TableCell className="text-white">18-08-23</TableCell>
                            <TableCell className="text-white">Unpaid</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-white">Extended Standard</TableCell>
                            <TableCell className="text-white">$1500</TableCell>
                            <TableCell className="text-white">12-09-23</TableCell>
                            <TableCell className="text-white">$2775</TableCell>
                            <TableCell className="text-white">03-10-23</TableCell>
                            <TableCell className="text-white">Unpaid</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-white">Advanced Standard</TableCell>
                            <TableCell className="text-white">$2500</TableCell>
                            <TableCell className="text-white">01-06-23</TableCell>
                            <TableCell className="text-white">$5000</TableCell>
                            <TableCell className="text-white">16-07-23</TableCell>
                            <TableCell className="text-white">Paid</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-white">Intermediate</TableCell>
                            <TableCell className="text-white">$3500</TableCell>
                            <TableCell className="text-white">14-05-23</TableCell>
                            <TableCell className="text-white">$7000</TableCell>
                            <TableCell className="text-white">28-06-23</TableCell>
                            <TableCell className="text-white">Paid</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-white">Advanced</TableCell>
                            <TableCell className="text-white">$5000</TableCell>
                            <TableCell className="text-white">07-04-23</TableCell>
                            <TableCell className="text-white">$10000</TableCell>
                            <TableCell className="text-white">22-05-23</TableCell>
                            <TableCell className="text-white">Unpaid</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-white">Pro</TableCell>
                            <TableCell className="text-white">$7000</TableCell>
                            <TableCell className="text-white">21-03-23</TableCell>
                            <TableCell className="text-white">$14000</TableCell>
                            <TableCell className="text-white">05-05-23</TableCell>
                            <TableCell className="text-white">Paid</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-white">Elite</TableCell>
                            <TableCell className="text-white">$10000</TableCell>
                            <TableCell className="text-white">15-02-23</TableCell>
                            <TableCell className="text-white">$21000</TableCell>
                            <TableCell className="text-white">16-04-23</TableCell>
                            <TableCell className="text-white">Unpaid</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-white">Platinum</TableCell>
                            <TableCell className="text-white">$25000</TableCell>
                            <TableCell className="text-white">01-01-23</TableCell>
                            <TableCell className="text-white">$52500</TableCell>
                            <TableCell className="text-white">03-03-23</TableCell>
                            <TableCell className="text-white">Paid</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-white">Diamond</TableCell>
                            <TableCell className="text-white">$50000</TableCell>
                            <TableCell className="text-white">11-12-22</TableCell>
                            <TableCell className="text-white">$105000</TableCell>
                            <TableCell className="text-white">13-02-23</TableCell>
                            <TableCell className="text-white">Paid</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer> */}
        </div>
    );
}

export default InvestmentRecord;
