console.log("scripts/inject.js");

var readyStateCheckInterval = setInterval(function () {
  if (document.readyState === "complete") {
    clearInterval(readyStateCheckInterval);

    console.log("scripts/inject.js: document.readyState === complete");

    // Add new button group
    d3.select('.notification-center .tabnav')
      .insert('div', ':first-child')
      .attr('class','float-right')
      .attr('id','extBtGr')
      .style('margin-left', '5px');

    // "Open all:" disabled button
    d3.select('.notification-center .tabnav #extBtGr')
      .insert('a')
      .text('Open all:')
      .attr('class','btn btn-sm BtnGroup-item disabled')
      .attr('rel','foobar');

      // Issues
      d3.select('.notification-center .tabnav #extBtGr')
      .insert('a')
      .text('Issues')
      .attr('class','btn btn-sm BtnGroup-item')
      .attr('rel','foobar')
      .on("click", function() {
        console.log("click 'Open all Issues'");
        d3.selectAll('.notifications-list .list-group-item.unread')
          .filter('.issue-notification')
          .classed('unread',false)
          .classed('read',true)
          .selectAll('a.list-group-item-link')
          .each(function() {
            window.open(this.href);
            //console.log(this);
          })
      });

      // PRs
      d3.select('.notification-center .tabnav #extBtGr')
      .insert('a')
      .text('PRs')
      .attr('class','btn btn-sm BtnGroup-item')
      .on("click", function() {
        console.log("click 'Open all PRs'");
        d3.selectAll('.notifications-list .list-group-item.unread')
          .filter('.pull-request-notification')
          .classed('unread',false)
          .classed('read',true)
          .selectAll('a.list-group-item-link')
          .each(function() {
            window.open(this.href);
            //console.log(this);
          })
      });

      // Releases
      d3.select('.notification-center .tabnav #extBtGr')
      .insert('a')
      .text('Releases')
      .attr('class','btn btn-sm BtnGroup-item')
      .on("click", function() {
        console.log("click 'Open all Releases'");
        d3.selectAll('.notifications-list .list-group-item.unread')
          .filter('.release-notification')
          .classed('unread',false)
          .classed('read',true)
          .selectAll('a.list-group-item-link')
          .each(function() {
            window.open(this.href);
            //console.log(this);
          })
      });

      // Closed
      d3.select('.notification-center .tabnav #extBtGr')
      .insert('a')
      .text('closed')
      .attr('class','btn btn-sm BtnGroup-item')
      .on("click", function() {
        console.log("click 'Open all closed'");
        d3.selectAll('.notifications-list .list-group-item.unread .type-icon.type-icon-state-closed')
          .select(function() { return this.parentNode; })
          .select(function() { return this.parentNode; })
          .classed('unread',false)
          .classed('read',true)
          .selectAll('a.list-group-item-link')
          .each(function() {
            window.open(this.href);
            //console.log(this);
          })
      });

      // Merged
      d3.select('.notification-center .tabnav #extBtGr')
      .insert('a')
      .text('merged')
      .attr('class','btn btn-sm BtnGroup-item')
      .on("click", function() {
        console.log("click 'Open all merged'");
        d3.selectAll('.notifications-list .list-group-item.unread .type-icon.type-icon-state-merged')
          .select(function() { return this.parentNode; })
          .select(function() { return this.parentNode; })
          .classed('unread',false)
          .classed('read',true)
          .selectAll('a.list-group-item-link')
          .each(function() {
            window.open(this.href);
            //console.log(this);
          })
      });

      // All unread
      d3.select('.notification-center .tabnav #extBtGr')
      .insert('a')
      .text('all unread')
      .attr('class','btn btn-sm BtnGroup-item')
      .attr('rel','foobar')
      .on("click", function() {
        console.log("click 'Open all unread'");
        d3.selectAll('.notifications-list .list-group-item.unread')
          .classed('unread',false)
          .classed('read',true)
          .selectAll('a.list-group-item-link')
          .each(function() {
            window.open(this.href);
            //console.log(this);
          })
      });

  }
}, 10);