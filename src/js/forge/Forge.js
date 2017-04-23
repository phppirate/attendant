class ApiRequest {
    static basicRequest(method = "GET"){
        let access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjYzMWZkNTc3YzQxNTU3NTFmNzNkNmYxZTNjNDg5N2M5N2I4NjgzMzAwMzNkNjY3MmIwMWQwMzY2NzhhYTc3ZDBlMmExNTQ5ZjFiNTA3OWJhIn0.eyJhdWQiOiIxIiwianRpIjoiNjMxZmQ1NzdjNDE1NTc1MWY3M2Q2ZjFlM2M0ODk3Yzk3Yjg2ODMzMDAzM2Q2NjcyYjAxZDAzNjY3OGFhNzdkMGUyYTE1NDlmMWI1MDc5YmEiLCJpYXQiOjE0OTI1Njg2NzAsIm5iZiI6MTQ5MjU2ODY3MCwiZXhwIjoxNTI0MTA0NjcwLCJzdWIiOiIxNjAyMCIsInNjb3BlcyI6W119.MUUx5SbZcy6hmAPCvFaIbmpkCZ6kI1t9YRy-hUab5v64_O0cxO9cCL_187cJWW6_Yldm-LLR-ojlbbJxVMvx66SDUCMmB_ew9zX8_LhjiuGIPqhOVzuivhWp2zqAT9gBjr4QmI-V6XEBrpXXVaF4SvMSWKhtBoSGd3zAS4ciX45XFOwt05QsQ9A-lBuLb3LzOsC8IYoVrPtYW2ni1DkLjLKGGTLoWSVxGCLXm1TgfRkntmDsvzOxmq-5WB6EHAUBJ1UUyfYAm9mK9zxUyq1Rbw1lbga5E1MDywwsI5Bk5df1G6zuexUpVLrrZHgbC19fmqGvhXIuFV4EjBbgl_wiAQbLQ-lA63ufdhJK2lRrmL-ds21-n0H5TGJBhCyKbFy7KY0LvuvXfZ1Te-CFm3wt3qw97oMte8SPOkM1QGmPM6J8kbr9eoOerKd5MasQxBSqzCrHfjpW-1wuIdSlRdGwjnq2KiDJtT69a2qdQym5jOQkOz4kWl41n61FQNpBNSirhN5NtAOoHbpbRh2q50wQykUbLUNdV7VQoYAZoAqrSWpofGNVlwN-EE75A_-o2O1-0t3VLY1jJjLGBHSK5Z8-_BgLo7NQGMwKFBRuGwf_Wg-WZRHpHACOXA2IwunWsvQFQAlOKCr2z9kyJXxTZQd3DGVzSlS-UYMymz3QqF_5Msk";
        let baseOptions = {
            method: method,
            headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json'.
               'Authorization': 'Bearer ' + access_token
            },
        };

    }


}


export default class Forge {

}