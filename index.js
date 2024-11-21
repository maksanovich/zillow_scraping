main();

async function main() {
    const response = await fetch("https://www.zillow.com/professionals/real-estate-agent-reviews/whitesboro-ny-13492/?page=3", {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "max-age=0",
            "priority": "u=0, i",
            "sec-ch-ua": "\"Chromium\";v=\"130\", \"Google Chrome\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
            "cookie": "zguid=24|%24dc469be2-28fe-40d7-bccd-f34f4bbbdb5e; zgsession=1|58b4ce8a-c98d-4250-83d4-14bf9e48863b; zjs_anonymous_id=%22dc469be2-28fe-40d7-bccd-f34f4bbbdb5e%22; zjs_user_id=null; zg_anonymous_id=%22a57a3eb7-853a-420f-8769-32cc890ab7a9%22; pxcts=2e7a4481-a815-11ef-a24a-6e5f9891b235; _pxvid=2e7a395d-a815-11ef-a24a-2a3469d58dd6; _gcl_au=1.1.178716360.1732199446; _scid=eSCQe6n9HyOkrcFcMU6s8JI1XPb1XWOm; DoubleClickSession=true; _ScCbts=%5B%5D; _tt_enable_cookie=1; _ttp=Z6qpSFfRlKU0No2-obdjP0lzJqZ.tt.1; _sctr=1%7C1732136400000; AWSALB=GdKejvCmvelAFqWRMbv/W/o6KFt5kM8vKbk/rUZkw3ORjAE8et8t178Lu9SLd1Zx83us2aDFc0MmM6KTYEFleRyNphFNdRIMfSoAmfGx27f/ko4iuhOCf/nIT0SP; AWSALBCORS=GdKejvCmvelAFqWRMbv/W/o6KFt5kM8vKbk/rUZkw3ORjAE8et8t178Lu9SLd1Zx83us2aDFc0MmM6KTYEFleRyNphFNdRIMfSoAmfGx27f/ko4iuhOCf/nIT0SP; JSESSIONID=2846E3C4DC4C45D0C881912A9BC50017; _scid_r=hKCQe6n9HyOkrcFcMU6s8JI1XPb1XWOm_Da5MQ; _px3=e643292acbe0c08ed80ad9cde244aa20c8ef5ccd537641ee5889f02f5dee622f:N52qObPg9a4F9aIz5jSmFmAndAgyuA41kGIq7j2PHF4oXu1WGcVPeEs+CFFXSR4gXGXtt8cnXz8bOeCSPBAwXA==:1000:0zPYN3MmwQNqR4Mr3NsHYIF/u5tdbniyzCgUJue+z9Yl4BPN//VY2CUINJzStw3IgcShD7MsBOb2Nzsc68PlyU9OWhIvILjGDqbOrq348ZcOtqk5hVOfHiC7bvvg/dXnjTFdV1rpMNo4akiWV7iY6niH+pYCEX/unGSUi5E2yBPUNRTTrbyDkqOXx6+mdvcbpAtoH7g5Di1IE3AO2rJkepJXCX0QvIy6zDln+DJVyYA="
        },
        "referrerPolicy": "unsafe-url",
        "body": null,
        "method": "GET"
    });

    console.log(response);
}