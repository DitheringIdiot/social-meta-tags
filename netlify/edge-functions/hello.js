export default (request, context) => {
    
    const url = request.url

    const responseMarkup = url + '\n\r' + JSON.stringify(context)

    return new Response(responseMarkup);
}