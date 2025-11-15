import { Layers2, Pencil } from "lucide-react";

const CategoryList = ({ categories, onEditCategory }) => {
  return (
    <div className="card p-4">
      <div className="mb-4">
        <h4 className="text-lg font-semibold">Category Sources</h4>
      </div>

      {/* Category List */}
      {categories.length === 0 ? (
        <p className="text-gray-500">
          No categories added yet. Add some to get started.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative flex items-center gap-4 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              {/* Icon/Emoji Display */}
              <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
                {category.icon ? (
                  <img
                    src={category.icon}
                    alt={category.name}
                    className="h-6 w-6 object-contain"
                  />
                ) : (
                  <Layers2 className="text-blue-600" size={24} />
                )}
              </div>

              {/* Category Details */}
              <div className="flex-1 flex items-center justify-between">
                {/* Name + Type */}
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {category.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 capitalize">
                    {category.type}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => onEditCategory?.(category)}
                    className="text-gray-400 hover:text-purple-600"
                  >
                    <Pencil size={18} />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryList;
