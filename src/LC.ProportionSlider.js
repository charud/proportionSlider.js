var LC = LC || {};

LC.ProportionSlider = function(options)
{
	var me = {};
	var _items = [];
	var _element;
	var _maxValue;

	me.init = function()
	{
		_element = options.element;
		_maxValue = options.maxValue || 100;
	};

	me.addItem = function(item)
	{
		_items.push(item);
		me.invalidateLayout();
	};

	me.invalidateLayout = function()
	{
		_element.innerHTML = "";

		for(var i in _items)
		{
			var item = _items[i];
			var elmItem = document.createElement("div");
			elmItem.className = "item";
			elmItem.innerHTML = item.content;

			var itemPercentage = item.value / _maxValue;

			elmItem.style.width = itemPercentage * _element.offsetWidth - 1 /*border*/;
			//elmItem.style.height = _element.offsetHeight - 2 /*border*/;

			_element.appendChild(elmItem);
		}


	};

	me.init();
	return me;
};