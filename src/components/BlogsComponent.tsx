



export default function BlogsContent() {
    return (
        <>
            <div className="space-y-2 md:space-y-5 ">
                <BlogsComponent
                    heading="The Creation of the World"
                    date="(Friday, 25 August 2023)"
                    footer="And the earth was without form, and void; and  void; and darkness  darkness"

                />
                <BlogsComponent
                    heading="The Creation of the World"
                    date="(Friday, 25 August 2023)"
                    footer="And the earth was without form, and void; and  void; and darkness  darkness"

                />
                <BlogsComponent
                    heading="The Creation of the World"
                    date="(Friday, 25 August 2023)"
                    footer="And the earth was without form, and void; and  void; and darkness  darkness"

                />
                <BlogsComponent
                    heading="The Creation of the World"
                    date="(Friday, 25 August 2023)"
                    footer="And the earth was without form, and void; and  void; and darkness  darkness"

                />
                <BlogsComponent
                    heading="The Creation of the World"
                    date="(Friday, 25 August 2023)"
                    footer="And the earth was without form, and void; and  void; and darkness  darkness"

                />
                <BlogsComponent
                    heading="The Creation of the World"
                    date="(Friday, 25 August 2023)"
                    footer="And the earth was without form, and void; and  void; and darkness  darkness"
                />
            </div >
        </>
    )
}


import { Card, CardContent } from "./ui/card";

type Props = {
    heading: React.ReactNode;
    date: React.ReactNode;
    footer: React.ReactNode;
    className?: string;
};

export function BlogsComponent({ heading, date, footer }: Props) {
    return (
        <Card className="bg-white w-full">
            <CardContent>
                <div className="md:space-y-1">
                    <div className="flex gap-1 md:gap-2 items-center">
                        <h1 className="font-bold text-lg  font-roman text-primary-dark/80 md:text-xl" >
                            {heading}
                        </h1>
                        <p className="font-normal  text-primary-dark text-xs font-inter">
                            {date}
                        </p>
                    </div>
                    <div className="text-sm font-normal font-roman text-ellipsis whitespace-nowrap overflow-hidden">
                        {footer}
                    </div>

                </div>
            </CardContent>
        </Card >
    );
}