using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Channels;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers{

    [ApiController]
    [Route("api/channels")]
    //[Route("api/controller")]
    public class ChannelsController : ControllerBase{
        private IMediator _mediator;

        public ChannelsController(IMediator mediator)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }

        //Get All
        [HttpGet]
        public async Task<ActionResult<List<Channel>>> List(CancellationToken ct)
        {
            return await _mediator.Send(new List.Query(), ct);
        }

        //Details
        [HttpGet("{id}")]
        public async Task<ActionResult<Channel>> Details(Guid id)
        {
            return await _mediator.Send(new Details.Query { Id = id});
        }

        //Create
        [HttpPost]
        public async Task<Unit> Create([FromBody] Create.Command command)
        {
            return await _mediator.Send(command);
        }
    }
}